
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

CREATE DATABASE chat;

USE chat;
    
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name TEXT NOT NULL,
  PRIMARY KEY (id)
);

    
CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name TEXT NOT NULL,
  PRIMARY KEY (id)
);

    
CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT NOT NULL,
  message TEXT NOT NULL,
  id_rooms INTEGER NOT NULL,
  id_users INTEGER NOT NULL,
  UNIQUE KEY (id)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE messages ADD FOREIGN KEY (id_rooms) REFERENCES rooms (id);
ALTER TABLE messages ADD FOREIGN KEY (id_users) REFERENCES users (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `messages` (`id`,`message`,`id_rooms`,`id_users`) VALUES
-- ('','','','');