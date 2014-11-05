<div class="spacer100"></div>
<div id="footer" class="pad20 hidden">
	<a class="w100pc" href="javascript:void(0);" onclick="skrollTo('#home')" title="<?= $meta['site_name'] ?>">
		<?= $meta['site_name'] ?>
	</a>
	<hr class="w100pc"/>
	<div class="w100pc hidden">
		<a class="w25pc" href="javascript:void(0);" onclick="skrollTo('#bio')" title="<?= $meta['site_name'] ?>">Bio</a>
		<a class="w25pc" href="javascript:void(0);" onclick="skrollTo('#resume')" title="<?= $meta['site_name'] ?>">Media</a>
		<a class="w25pc" href="javascript:void(0);" onclick="skrollTo('#resume')" title="<?= $meta['site_name'] ?>">Resume</a>
		<a class="w25pc" href="javascript:void(0);" onclick="skrollTo('#contact')" title="<?= $meta['site_name'] ?>">Contact</a>
	</div>
	<hr class="w100pc"/>
	<a class="w100pc" target="_blank" href="https://lifthousedesign.com" title="Web Development">
		Web Design
	</a>
	<? if(!empty($has_social_media)){ ?>
		<hr/>
		<div class="w100pc align-center hidden">
			<? foreach($social_media as $s){ ?>
				<? if(empty($s['value'])) continue; ?>
				<a target="_blank" href="<?= $s['value'] ?>" title="<?= $site_name . ' ' . $s['label'] ?>">
					<img src="/assets/img/<?= $s['name'] ?>.png" alt="<?= $s['label'] ?>"/>
				</a>
			<? } ?>
		</div>
	<? } ?>
</div>