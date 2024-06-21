<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="imergindo logos (2)/2.png" type="image/x-icon">
    <link rel="stylesheet" href="projeto.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js" integrity="sha512-wC/cunGGDjXSl9OHUH0RuqSyW4YNLlsPwhcLxwWW1CR4OeC2E1xpcdZz2DeQkEmums41laI+eGMw95IJ15SS3g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <title>Projeto com efeito</title>
</head>
<body>
    <div class="container">
        <div class="card card1">
    <h2>Imerg Logo1</h2>
    <img src="imergindo logos (2)/2.png" alt="" class="logo">
    <button>Escolher este</button>
        </div>

        <div class="card card2">
            <h2>Imerg Logo2</h2>
            <img src="imergindo logos (2)/3.png" alt="" class="logo">
            <button>Escolher este</button>
        </div>
    </div>

    <script>
    VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400,
        glare: true,   
        "max-glare": 0.5
	});
   </script>

</body>
</html>
