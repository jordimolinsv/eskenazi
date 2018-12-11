<?php snippet('header') ?>

  <main class="main" role="main">

    <div class="proyectos">
      <?php
      $proyectos = $page->children()->visible();
      $proyectoSlug = '';
      $numSlide = 0;
      foreach($proyectos as $proyecto) :
        if( $proyecto->slug() != $proyectoSlug ) $proyectoSlug = $proyecto->slug();
        foreach( $proyecto->images()->sortBy('sort', 'asc') as $imagen ) : ?>
          <div class="slide" data-slug="<?= $proyectoSlug ?>" data-index="<?= $numSlide ?>" data-color="<?= $proyecto->color() ?>" data-color_texto="<?= $proyecto->color_texto() ?>">
            <img src="<?= $imagen->url() ?>" alt="<?= $proyecto->title() ?>" />

            <div class="prev-slide"></div>
            <div class="next-slide"></div>

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
          </div>
          <?php $numSlide++ ?>
        <?php endforeach ?>
      <?php endforeach ?>
    </div>

  </main>

  <div class="info">
    <a class="close-info" href="#">X Close</a>

    <div class="bio">
      <h3>Mario Eskenazi Estudio</h3>
      <?= page('home')->bio()->kirbytext() ?>

      <?php if($imagen = page('home')->imagen()->toFile()): ?>
        <div class="imagen">
          <img src="<?= $imagen->url() ?>" />
        </div>
      <?php endif ?>
    </div>

    <div class="clientes">
      <h3>Main Clients</h3>
      <?= page('home')->clientes()->kirbytext() ?>
    </div>

    <div class="contacto">
      <h3>Contact</h3>
      <?= page('home')->contacto()->kirbytext() ?>
    </div>
  </div>

<?php snippet('footer') ?>
