<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.2" tiledversion="1.2.4" name="level-tiles" tilewidth="16" tileheight="16" tilecount="64" columns="8">
 <image source="level-tiles.png" width="128" height="128"/>
 <tile id="0" type="wall"/>
 <tile id="1" type="floor"/>
 <tile id="16" type="door"/>
 <tile id="24" type="switch">
  <properties>
   <property name="is_blue" type="bool" value="false"/>
   <property name="targets" value=""/>
  </properties>
 </tile>
 <tile id="25" type="switch">
  <properties>
   <property name="is_blue" type="bool" value="true"/>
   <property name="targets" value=""/>
  </properties>
 </tile>
 <tile id="26" type="switch_door">
  <properties>
   <property name="is_open" type="bool" value="false"/>
  </properties>
 </tile>
 <tile id="27" type="switch_door">
  <properties>
   <property name="is_open" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="32" type="key"/>
 <tile id="33" type="locked_door"/>
 <tile id="40" type="exit">
  <properties>
   <property name="next_level" value=""/>
  </properties>
 </tile>
</tileset>
