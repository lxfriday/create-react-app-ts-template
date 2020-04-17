import { reportBase, whereYouFrom } from './reportBase'

const activityId = 1

/**
 * #4# 页面曝光打点，进入每个页面都要打
 * @link http://elk.pt.ai.srv/s/42781/app/kibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:e57e6610-215e-11ea-ade1-772c8757c04e,key:event_params.extend_json.template,negate:!f,params:(query:triennial_medal),type:phrase,value:triennial_medal),query:(match:(event_params.extend_json.template:(query:triennial_medal,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:e57e6610-215e-11ea-ade1-772c8757c04e,key:event_type,negate:!f,params:(query:expose),type:phrase,value:expose),query:(match:(event_type:(query:expose,type:phrase))))),index:e57e6610-215e-11ea-ade1-772c8757c04e,interval:auto,query:(language:kuery,query:''),sort:!(!(timestamp,desc),!(event_params.timestamp,desc)))
 */
export function reportPageExpose() {
  reportBase({
    event_type: 'expose',
    widget: 'ad_hoc_operation_module',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
    },
  })
}

/**
 * #7# 页面进入打点，进入首页打
 * @link http://elk.pt.ai.srv/s/42781/app/kibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:e57e6610-215e-11ea-ade1-772c8757c04e,key:event_params.extend_json.template,negate:!f,params:(query:triennial_medal),type:phrase,value:triennial_medal),query:(match:(event_params.extend_json.template:(query:triennial_medal,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:e57e6610-215e-11ea-ade1-772c8757c04e,key:event_type,negate:!f,params:(query:enter),type:phrase,value:enter),query:(match:(event_type:(query:enter,type:phrase))))),index:e57e6610-215e-11ea-ade1-772c8757c04e,interval:auto,query:(language:kuery,query:''),sort:!(!(timestamp,desc),!(event_params.timestamp,desc)))
 */
export function reportPageEnter() {
  reportBase({
    event_type: 'enter',
    widget: 'activity_page',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      from: whereYouFrom(),
    },
  })
}

/**
 * #5# 点击事件，点击query时上报
 * @link http://elk.pt.ai.srv/s/42781/app/kibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:e57e6610-215e-11ea-ade1-772c8757c04e,key:event_params.extend_json.template,negate:!f,params:(query:triennial_medal),type:phrase,value:triennial_medal),query:(match:(event_params.extend_json.template:(query:triennial_medal,type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:e57e6610-215e-11ea-ade1-772c8757c04e,key:event_params.extend_json.content,negate:!f,params:(query:triennial_medal_query),type:phrase,value:triennial_medal_query),query:(match:(event_params.extend_json.content:(query:triennial_medal_query,type:phrase))))),index:e57e6610-215e-11ea-ade1-772c8757c04e,interval:auto,query:(language:kuery,query:''),sort:!(!(timestamp,desc),!(event_params.timestamp,desc)))
 */
export function reportQueryClick() {
  reportBase({
    event_type: 'click',
    widget: 'ad_hoc_operation_module_interact_btn',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'triennial_medal_query',
    },
  })
}

/**
 * #5# 点击事件，开启悬浮球时上报（页面中开启）
 */
export function reportOpenBallFromPage() {
  reportBase({
    event_type: 'click',
    widget: 'ad_hoc_operation_module_interact_btn',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'triennial_medal_floating_ball',
    },
  })
}

/**
 * #22# 点击事件，开启悬浮球时上报（弹窗中“好的”，点击开启）
 */
export function reportOpenBallFromModal() {
  reportBase({
    event_type: 'click',
    widget: 'ad_hoc_operation_module_popup',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'fine',
    },
  })
}

/**
 * #22# 点击事件，悬浮球挽留弹窗中，点击暂不开启
 */
export function reportBallNotOpenFromModal() {
  reportBase({
    event_type: 'click',
    widget: 'ad_hoc_operation_module_popup',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'not_open',
    },
  })
}

/**
 * #8# 点击事件，点击活动规则
 */
export function reportClickRules() {
  reportBase({
    event_type: 'click',
    widget: 'activity_page_right_top_btn',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'activity_rules',
    },
  })
}

/**
 * #8# 点击事件，从页面点击我的奖品
 */
export function reportClickMyPrizeFromPage() {
  reportBase({
    event_type: 'click',
    widget: 'activity_page_right_top_btn',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'prize',
    },
  })
}

/**
 * #22# 点击事件，从弹窗点击我的奖品
 */
export function reportClickMyPrizeFromModal() {
  reportBase({
    event_type: 'click',
    widget: 'ad_hoc_operation_module_popup',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'prize',
    },
  })
}

/**
 * #8# 点击事件，点击分享
 */
export function reportClickShare() {
  reportBase({
    event_type: 'click',
    widget: 'activity_page_right_top_btn',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'share',
    },
  })
}

/**
 * #8# 点击事件，点击分享渠道弹框 PV UV ,支持区分点击微信好友和点击微信朋友圈
 * @param shareType {string} wx 微信、wx-moments 微信朋友圈、qq、weibo
 */
export function reportShareWays(shareType: string) {
  reportBase({
    event_type: 'click',
    widget: 'share_result',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      share_type: shareType,
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'share',
    },
  })
}

/**
 * #23# 状态事件，点亮星星
 */
export function reportLightStar(taskStatus: string) {
  reportBase({
    event_type: 'state',
    widget: 'ad_hoc_operation_module',
    event_data_type: 'state_count',
    event_params_extend_json: {
      content: taskStatus, // 1,3,5
      template: 'triennial_medal',
      activity_id: String(activityId),
    },
  })
}

/**
 * #5# 点击事件，点击奖章时上报
 * @param allDone {boolean} 任务是否已经都做了
 */
export function reportBadageClick(allDone: boolean) {
  reportBase({
    event_type: 'click',
    widget: 'ad_hoc_operation_module_interact_btn',
    event_data_type: 'simple_count',
    event_params_extend_json: {
      template: 'triennial_medal',
      activity_id: String(activityId),
      content: 'triennial_medal',
      medal_status: allDone ? '1' : '0',
    },
  })
}
