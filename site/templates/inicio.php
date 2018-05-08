<?php snippet('header') ?>

  <main class="main" role="main">

    <div class="proyectos">
      <?php
      $proyectos = $page->children()->visible();
      foreach($proyectos as $proyecto) :
      ?>
      <div class="proyecto">
        <?php foreach( $proyecto->images()->sortBy('sort', 'asc') as $imagen ) : ?>
          <?php $thumb = $imagen->resize(2000) ?>
          <div class="slide">
            <img src="<?= $thumb->url() ?>" alt="<?= $proyecto->title() ?>" />
          </div>
        <?php endforeach ?>
        <div class="caption">
          <h3><?= $proyecto->title()->html() ?></h3>
          <?= $proyecto->year()->html() ?><br />
          <?php $categorias = $proyecto->categorias()->split() ?>
          <?php foreach( $categorias as $categoria ) : ?>
            <h4><?= $categoria ?></h4>
          <?php endforeach ?>
          <?php foreach( $proyecto->colaboradores()->toStructure() as $colaborador ) : ?>
            <br /><a href="<?= $colaborador->enlace() ?>" target="_blank">
              + <?= $colaborador->colaborador()->html() ?>
            </a>
          <?php endforeach ?>
        </div>
      <?php endforeach ?>
    </div>

  </main>

  <div class="info">
    <a class="close-info" href="#">X Close</a>

    <div class="bio">
      <h3>Bio</h3>
      <?= page('home')->bio()->kirbytext() ?>
      <?php if($imagen = page('home')->imagen()->toFile()): ?>
        <img src="<?= $imagen->url() ?>" />
      <?php endif ?>
    </div>

    <div class="clientes">
      <h3>Clientes</h3>
      <?= page('home')->clientes()->kirbytext() ?>
    </div>

    <div class="contacto">
      <h3>Contacto</h3>
      <?= page('home')->contacto()->kirbytext() ?>
    </div>
  </div>

<?php snippet('footer') ?>
