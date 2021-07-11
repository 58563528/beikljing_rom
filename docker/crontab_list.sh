# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

##############短期活动##############
#点点券二代目
45 0,23 * * * node /scripts/jd_necklace_new.js >> /scripts/logs/jd_necklace_new.log 2>&1
#燃动夏季7.8-8.8
12 6-23/2 * * * node /scripts/jd_summer_movement.js >> /scripts/logs/jd_summer_movement.log 2>&1
#燃动夏季_SH助力7.8-8.8
14/41 7-14 * * * node /scripts/jd_summer_movement_help.js >> /scripts/logs/jd_summer_movement_help.log 2>&1
#欧洲狂欢杯
0 10  * * * node /scripts/jd_europeancup.js >> /scripts/logs/jd_europeancup.log 2>&1
#7月粉丝互动
1 8 * * * node /scripts/jd_wxFans.js >> /scripts/logs/jd_wxFans.log 2>&1
#愤怒的锦鲤
0 0 * * * node /scripts/jd_angryKoi.js >> /scripts/logs/jd_angryKoi.log 2>&1
##############长期活动##############
# 签到
7 0,17 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 京东抽奖机
0 0,12,23 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 京东排行榜
21 9 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
#宠汪汪二代目
45 */2,23 * * * node /scripts/jd_joy_new.js >> /scripts/logs/jd_joy_new.log 2>&1
#京东签到图形验证
14 10 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
#口袋书店
1 8,12,18 * * * node /scripts/chinnkarahoi_jd_bookshop.js >> /scripts/logs/chinnkarahoi_jd_bookshop.log 2>&1
#天降红包
30 7 * * * node /scripts/jd_SplitRedPacket.js >> /scripts/logs/jd_SplitRedPacket.log 2>&1
#东东乐园
30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1
#星系牧场
1 0-23/2 * * * node /scripts/jd_qqxing.js >> /scripts/logs/jd_qqxing.log 2>&1
#早起福利
30 6 * * * node /scripts/jd_goodMorning.js >> /scripts/logs/jd_goodMorning.log 2>&1
#汪汪乐园每日助力
30 23 * * * node /scripts/jd_joy_park_help.js >> /scripts/logs/jd_joy_park_help.log 2>&1
#全民运动会
1 10 * * * node /scripts/jd_olympicgames.js >> /scripts/logs/jd_olympicgames.log 2>&1
#送豆得豆
45 4 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
