<?php
  $comment = $_REQUEST['comment'];
  $latitude = $_REQUEST['latitude'];
  $longitude = $_REQUEST['longitude'] ;
  
  $db = new SQLite3('/scratch/users/geoweb2013/htdocs/ifip/ifip_census.sqlite');
  $db->loadExtension('libspatialite.so');

  $sql = "INSERT INTO comments (comment, geom) ";
  $sql .= "VALUES ('" . $comment . "', ";
  $sql .= "GeomFromText('POINT(" . $longitude . " " . $latitude . ")', 4326))";

  $db->exec($sql) or die ('Error: '.$db->lastErrorMsg());
  
  $db->close();

  echo "Thanks for your comment.";
?>
