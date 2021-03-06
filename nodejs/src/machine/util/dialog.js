const INTENTION_UNKOWN = 'INTENTION_UKNOWN';
const INTENTION_MORE = 'more';
const INTENTION_GOBACK = 'goback';

function get_input(event, scrub = true) {
  return scrub? event.message.input.trim().toLowerCase() : event.message.input;
}
function get_message(bundle, locale = 'en_IN') {
  return (bundle[locale] === undefined)? bundle['en_IN'] : bundle[locale];
}
function get_intention(g, event, strict = false) {
  let utterance = get_input(event);
  function exact(e) {
    return e.recognize.includes(utterance)
  }
  function contains(e) {
    return e.recognize.find(r=>utterance.includes(r))
  }
  let index = strict? g.findIndex(exact) : g.findIndex(e=>contains(e));
  return (index == -1) ? INTENTION_UNKOWN : g[index].intention;
}
function constructListPromptAndGrammer(keys, message_bundle, locale, more = false, goback = false) {
  var prompt = '';
  var grammer = [];
  if (more) {
    keys = keys.concat([INTENTION_MORE])
    message_bundle = Object.assign({}, message_bundle, {[INTENTION_MORE]: global_messages.more})
  }
  if (goback) {
    keys = keys.concat([INTENTION_GOBACK])
    message_bundle = Object.assign({}, message_bundle, {[INTENTION_GOBACK]: global_messages.goback})
  }
  
  keys.forEach((element, index) => {
    let value = undefined;
    if(message_bundle[element] !== undefined) {
      value = get_message(message_bundle[element], locale);
    }
    if (value === undefined) {
      value = element;
    }
    prompt+= `\n${index+1}. ` + value;
    grammer.push({intention: element, recognize: [(index+1).toString()]});
  });
  return {prompt, grammer};
}
function constructLiteralGrammer(keys, message_bundle, locale) {
  var grammer = [];
  keys.forEach((element) => {
    let value = undefined;
    if (message_bundle[element] !== undefined) {
      value = get_message(message_bundle[element], locale);
    } 
    if(value === undefined) {
      value = element;
    }
    grammer.push({intention: element, recognize: [value.toLowerCase()]});
  });
  return grammer;
}
function validateInputType(event, type) {
  let inputType = event.message.type;
  return inputType === type;
}
function sendMessage(context, message, immediate = true) {
  if(!context.output) {
    context.output = [];
  }
  context.output.push(message);
  if(immediate) {
    context.chatInterface.toUser(context.user, context.output, context.extraInfo);
    context.output = [];
  }
}

//TODO: All the below regional langauges are translated by google, replace with original - marathi
let global_messages = {
  error: {
    optionsRetry: {
      en_IN: 'I am sorry, I didn\'t understand. Please select from the options given again.',
      hi_IN: '????????????, ???????????? ????????? ???????????? ?????????, ?????????????????? ???????????? ????????? ?????? ???????????????????????? ????????? ?????? ????????? ?????? ??????????????????',
      ta_IN: '????????????????????????????????????, ?????????????????????????????????. ??????????????????????????????????????? ??????????????????????????? ???????????????????????? ?????????????????? ???????????????.',
      ma_IN: '????????? ?????????, ????????? ???????????? ????????????. ??????????????? ?????????????????? ???????????????????????? ???????????????????????????????????? ???????????????.',
      kn_IN: '?????????????????????, ???????????? ????????????????????????????????????. ????????????????????????  ??????????????????????????? ?????????????????????????????? ?????????????????????????????????',
      te_IN: '??????????????????????????????. ????????????????????? ??? ???????????? ???????????????????????? ??????????????? ?????? ?????????????????? ???????????????????????? ??????????????????',
    },
    retry: {
      en_IN: 'I am sorry, I didn\'t understand. Let\'s try again.',
      hi_IN: '????????????, ???????????? ????????? ???????????? ?????????, ????????? ?????? ?????????????????? ???????????????',
      ta_IN: '????????????????????????????????????. ?????????????????????????????????. ???????????????????????? ??????????????????????????????????????????.',
      ma_IN: '????????? ?????????, ????????? ???????????? ????????????. ????????? ?????????????????? ????????????????????? ???????????????.',
      kn_IN: '?????????????????????, ???????????? ????????????????????????????????????. ??????????????? ?????????????????????????????????.',
      te_IN: '??????????????????????????????. ??????????????? ??????????????????. ????????????????????? ???????????????????????? ??????????????????',
    },
    proceeding: {
      en_IN: 'I am sorry, I didn\'t understand. But proceeding nonetheless',
      hi_IN: '????????????, ???????????? ????????? ???????????? ????????? ??????????????? ????????? ?????? ????????? ??????????????????',
      ta_IN: '????????????????????????????????????, ?????????????????????????????????. ????????????????????????????????? ???????????????????????? ??????????????????????????????????????????.',
      ma_IN: '????????? ?????????, ????????? ???????????? ????????????. ?????? ??????????????? ????????????',
      kn_IN: '?????????????????????, ???????????? ????????????????????????????????????. ???????????? ??????????????????????????? ???????????????????????????????????????',
      te_IN: '?????????????????????????????????. ?????????????????????????????????. ??????????????? ????????? ????????????????????????????????????????????????????????????????????????',
    }
  },
  system_error: {
    en_IN: 'I am sorry, our system has a problem and I cannot fulfill your request right now. Could you try again in a few minutes please?',
    hi_IN: '????????????, ??????????????? ?????????????????? ????????? ????????? ?????????????????? ??????, ?????? ???????????? ??????????????????????????? ?????? ?????????????????? ???????????? ???????????? ?????? ??????????????? ???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ??????????????? ?????? ???????????? ??????????',
    ta_IN: '????????????????????????????????????, ????????????????????? ????????????????????????????????? ???????????????????????????. ????????????????????? ?????????????????????????????? ????????????????????? ?????????????????????????????? ?????????????????????????????????. ????????? ?????????????????????????????? ????????????????????? ?????? ?????????????????? ????????????????????? ??????????????? ?????????????????????????',
    ma_IN: '????????? ????????? ?????????, ?????????????????? ????????????????????????????????? ?????????????????? ????????? ????????? ?????? ?????????????????? ???????????? ?????????????????? ??????????????? ????????? ????????? ????????????. ??????????????? ???????????? ????????????????????? ?????????????????? ????????????????????? ???????????? ???????',
    kn_IN: '?????????????????????, ???????????? ??????????????????????????????????????? ?????????????????? ????????? ??????????????? ??????????????? ????????????????????????????????? ???????????? ????????????????????? ??????????????????????????????. ???????????????????????? ??????????????? ????????????????????? ???????????? ??????????????? ??????????????????????????????',
    te_IN: '??????????????????????????????. ???????????????????????? ??????????????? ???????????????????????????????????? ?????? ?????????????????????????????? ????????????????????? ???????????????????????????????????????. ????????????????????? ???????????? ?????????????????? ??????????????????????????????????????????',
  },
  [INTENTION_MORE]: {
    en_IN : "See more ...",
    hi_IN : "?????? ??????????????? ...",
    ta_IN: '?????????????????? ?????????????????????...',
    ma_IN: '???????????? ????????? ...',
    kn_IN: '???????????????????????? ???????????? ...',
    te_IN: '????????????????????? ????????????????????? ...',
  },
  [INTENTION_GOBACK]: {
    en_IN : 'To go back ...',
    hi_IN : '???????????? ???????????? ...',
    ma_IN: '????????? ?????????????????????????????? ...',
    ta_IN: '??????????????????????????? ??????????????? ...',
    kn_IN: '??????????????????????????? ...',
    te_IN: '????????????????????? ????????????????????????????????? ...',
  },
}

module.exports = { get_input, get_message, get_intention, INTENTION_UNKOWN, INTENTION_MORE, INTENTION_GOBACK, global_messages, constructListPromptAndGrammer, constructLiteralGrammer, validateInputType, sendMessage };
