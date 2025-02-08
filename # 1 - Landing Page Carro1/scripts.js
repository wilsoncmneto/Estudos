* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style: none;
	font-family: "Poppins", sans-serif;
}

body {
	background-color: #000;
	color: #fff;
	font-size: 16px;
	overflow: hidden;
}


/*dica de como centralizar o cabeçalho*/
header {
	/*dica de como centralizar o cabeçalho*/
	position: fixed;
	width: 80vw;
	left: 50%;
	transform: translateX(-50%);
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 600px;
	gap: 100px;
	z-index: 2;

	& img {
		width: 250px;
	}

	& nav {
		& ul {
			display: grid;
			grid-template-columns: repeat(3, 200px);
		}
	}
}

section {
	background-image: radial-gradient(#470964, #791fd3);
	height: 100vh;
	position: relative;

	& .list {
		width: 70vw;
		height: 100%;
		margin: auto;
		position: relative;

		& .item {
			position: absolute;
			inset: 0;

			& .car-img {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: 70%;

				& img {
					width: 100%;
					transform: rotate(-30deg);
				}
			}

			& .content {
				position: absolute;
				right: 100px;
				width: 70%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				/* joga todo mundo para centro*/
				align-items: end;
				/* todo mundo para direita */
				gap: 20px;

				& .car-information {
					font-weight: bold;
					/* deixa ele negrita */
				}

				& h2 {
					font-size: 8em;
					line-height: 1em;
					font-family: "League Gothic", sans-serif;
				}

				& .description {
					color: #d9d9d9;
					font-size: 12px;
					text-align: right;
					/* coloca o texto ao lado direito */
					max-width: 400px;
					/* Maxima da distancia a direita */
				}

				& .information {
					border-radius: 30px;
					/* Borda arrendondada */
					height: 35px;
					width: 120px;
					text-transform: uppercase;
					/* coloca todas as letrar maiúscula */
					border: 2px solid #791fd3;
					background-color: #beff1b;
					cursor: pointer;
					font-weight: bold;
					font-family: "League Gothic", sans-serif;

				}
			}
		}

		/* voce coloca coisas antes ou de pois dos itens */
		&::before {
			content: '';
			position: absolute;
			height: 200px;
			width: 100%;
			top: 50%;
			border-top: 1px solid #fff;
		}
	}

	.arrows {
		width: 70vw;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -25px);
		display: flex;
		/* ele habilita o justify-content*/
		justify-content: space-between;

		/* :nth-child(1) permite com que eu selecione a primeira img para que não precisa criar um outra classe*/
		& button:nth-child(1) {
			& img {
				transform: scale(-1);
				/*houve a mudança de direção passando da esquerda para a direita*/

			}
		}


		& button {
			top: 60%;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			border: none;
			cursor: pointer;

			& img {
				width: 30px;
				margin-top: 4px;
				cursor: pointer;
			}

			&:hover {
				background-color: #beff1b;
			}
		}
	}

	/* ajuste dos numeros */
	.indicators {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
		height: 200px;
		width: 90vw;
		display: flex;
		flex-direction: column;
		/*coloca um embaixo do outro */
		justify-content: end;
		/*coloca todo mundo para o final*/
		gap: 15px;

		& .number {
			font-size: 5em;
			font-family: "League Gothic", sans-serif;
		}

		& ul {
			display: flex;
			gap: 10px;

			/*ajuste das barinhas embaixo do nnumero*/
			& li {
				width: 50px;
				height: 5px;
				background-color: #beff1b;
				border-radius: 5px;
				transition: 0.5s;
			}

			& .active {
				background-color: #fff;
			}
		}
	}
}

/* agora aqui é a parte da animação do site */

section {

	& .list {
	--calculation: 1; /* essa variavel criada foi colocada para mudar a direção de quando clicado do lado direito a imagem vem do lado direito e quando clicado na seta do lado esquerdo ele vem do lado esquedo, vai ser modificado no javascript */

		& .item {
			transform: translateX(calc(100vw * var(--calculation)));
			/* aqui a estrutura das imagens percorre todo o eixo x*/
			transition: 0.5s;
			opacity: 0;
			/* aqui ele vai sumir da tela */

			& .car-img {
				& img {
					transform: rotate(0);
					/* precisamos que a imagem veia reto para de pois fazer a rotação */
					transition: 0.5s;
					transition-delay: 0.3s;
				}
			}

			& .content {

				& .car-information, h2, .description, .information {
					transform: translateX(calc(200px * var(--calculation)));
					transition: 0.7s;
					transition-delay: 0.3s;
					opacity: 0;
				}

				& h2 {
					transition-delay: 0.5s;
				}

				& .description {
					transition-delay: 0.7s;
				}

				& .information {
					transition-delay: 0.9s;
				}
			}
		}

		& .active {
			transform: translateX(0);
			transition: 0.5s;
			opacity: 1;

			& .car-img {
				& img {
					transform: rotate(-20deg); 
				}
			}

			& .content {

				& .car-information, h2, .description, .information {
					transform: translateX(0);
					opacity: 1;
				}
			}
		}
	}
}
