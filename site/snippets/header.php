<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <?php if($page->parent()->slug() === 'home') : ?>
    <meta name="robots" content="noindex" />
  <?php endif ?>

  <title><?= $site->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">

  <?= css(array(
    'assets/js/slick/slick.css',
    'assets/css/index.css'
  )) ?>

</head>
<body class="<?= $page->uid() ?>">

  <h1 class="site-title">
    <a href="<?= url() ?>" rel="home"><?= $site->title()->html() ?></a>
  </h1>

  <a class="info-btn" href="#">Info</a>
