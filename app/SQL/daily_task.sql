CREATE TABLE if not exists `tasks` (
  `id` bigint(64) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(64) unsigned NOT NULL COMMENT '用户ID',
  `task_name` varchar(20) NOT NULL COMMENT '任务名称',
  `point` int(32) unsigned NOT NULL DEFAULT 50 COMMENT '任务权重',
  `status` varchar(2) NOT NULL DEFAULT 1 COMMENT '任务状态：1-未完成，2-已完成',
  `type` varchar(20) NOT NULL DEFAULT 'daily' COMMENT '任务类型',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unq_user_id_task_name` (`user_id`,`task_name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4
 

INSERT INTO tasks (user_id, task_name) VALUES (330101, '办理身份证') 