<? foreach($blogs as $b){ ?>
	<div class="blog-wrap">
		<h3 class="blog-title">
			<?= $b['name'] ?>
			<span class="blog-time"/><?= date('Y - m - d', strtotime($b['time'])) ?></span>
		</h3>
		<div class="w100pc"></div>
		<div class="blog-content"><?= $b['content'] ?></div>
	</div>
	<div class="spacer10"></div>
<? } ?>
<? if(isset($older)){ ?>
	<a href="/blog/<?= intval($older) ?>">&larr; Older</a>
<? } ?>
<? if(isset($newer)){ ?>
	<a class="pull-right" href="/blog/<?= intval($newer) ?>">Newer &rarr;</a>
<? } ?>