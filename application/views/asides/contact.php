<div class="contact">
	<div class="center540">
		<h2 class="align-center"><b>CONTACT TO ME TODAY</b></h2>
		<?= $yield_notifications ?>
		<form id="contact-form" method="post">
			<input id="form-check" type="hidden" name="00<?= sha1(rand(0,time())) ?>" value=""/>
			<input type="text" name="name" placeholder="Name (first and last)" value="<?= $name ?>"/>
			<input type="text" name="phone" placeholder="Mobile Phone" value="<?= $phone ?>"/>
			<input type="text" name="email" placeholder="Email" value="<?= $email ?>"/>
			<textarea name="message" placeholder="Message" class="tall"><?= $message ?></textarea>
			<input type="submit" value="SEND"/>
		</form>
	</div>
</div>