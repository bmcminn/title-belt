<?php

  define('DS', DIRECTORY_SEPARATOR);

  $fileExtensions = [
    'js', 'css'
  ];

  // serve the requested resource as-is.
  if (preg_match("/\.(?:".implode('|', $fileExtensions).")$/", preg_replace('/\?[\s\S]+/i', '', $_SERVER['REQUEST_URI']))) {
    return false;
  }

  $version = isset($_GET['pre']) ? $_GET['pre'] : 'stylus';

  $css = "/${version}/title-belt.css";

?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php echo ucwords($version).' | '; ?>Title Belt</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="<?php echo $css; ?>">
</head>
<body>

  <div class="container max">

    <section class="container">
      <?php echo file_get_contents(__DIR__.DS.'_buttons.html'); ?>
    </section>

    <div class="hr spacer"></div>

    <section class="container">
      <?php echo file_get_contents(__DIR__.DS.'_grid.html'); ?>
    </section>

    <div class="hr spacer"></div>

    <section class="container">
      <?php echo file_get_contents(__DIR__.DS.'_form.html'); ?>
    </section>

  </div>

</body>
</html>
