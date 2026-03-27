export const recipes = [
	{
		id: 'empanadas-tucumanas',
		title: 'Empanadas Tucumanas',
		description: 'Las auténticas empanadas cortadas a cuchillo. Jugosas, hechas con matambre de vaca, pasas de uva, huevo duro y aceitunas. Un manjar del norte argentino.',
		image: '/empanadas_tucumanas.png',
		time: '1h 30m',
		difficulty: 'Media',
		ingredients: [
			'1 kg de matambre de vaca',
			'1 kg de cebolla blanca picada final',
			'200g de grasa pella',
			'6 huevos duros picados',
			'Aceitunas verdes y pasas de uva (opcional pero clásico)',
			'Pimentón dulce, comino y ají molido a gusto',
			'Tapas para empanadas criollas (hojaldradas o al horno)'
		],
		steps: [
			'Hervir el matambre con sal gorda durante unos 40 minutos para que ablande un poco. Dejar enfriar y cortar a cuchillo en dados pequeños.',
			'En olla de hierro, rehogar la cebolla picada fina con la grasa pella. Una vez transparente, añadir la carne picada y cocinar unos minutos. Condimentar con pimentón, comino y ají.',
			'Fuera del fuego y una vez frío el relleno, agregar los huevos picados, pasas de uva y aceitunas descarozadas.',
			'Colocar cucharadas generosas de relleno en cada disco, humedecer el borde y realizar 13 repulgues.',
			'Hornear a máxima temperatura (ideal horno de barro) hasta que estén doradas o freírlas en grasa para el sabor más clásico.'
		]
	},
	{
		id: 'asado-tradicional',
		title: 'Asado Tradicional',
		description: 'El clásico domingo argentino. Costillar, vacío, tira de asado y achuras cocinadas lentamente al fuego de leña. Acompañado de un buen chimichurri.',
		image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
		time: '3h',
		difficulty: 'Alta',
		ingredients: [
			'1 Tira de asado gruesa',
			'1 Vacío completo (aprox. 1.5 kg)',
			'Chorizos bombón y morcillas',
			'Sal gruesa o parrillera',
			'Carbón vegetal o leña dura (quebracho/espinillo)',
			'Chimichurri listo (aceite, vinagre, ajo, perejil, ají)'
		],
		steps: [
			'Encender un buen fuego en un rincón de la parrilla y esperar hasta formar brasa rojas bien encendidas, sin humo negro.',
			'Salar la toda la carne por ambas caras utilizando sal semigruesa o parrillera.',
			'Colocar los cortes gordos primero (Vacío) del lado de las membranas hacia la parrilla. Esparcir la brasa por debajo logrando un calor moderado-alto (aguantar el calor 7 segundos con la palma).',
			'Cocinar a fuego lento durante 1 hora y media a 2 horas del primer lado para las piezas gruesas.',
			'Girar la carne justo cuando la parte superior de los cortes comience a transpirar jugo. Tirar los chorizos y asar por 45 min extra. Servir caliente cortando siempre en tabla de madera.'
		]
	},
	{
		id: 'alfajores-de-maicena',
		title: 'Alfajores de Maicena',
		description: 'Suaves tapas de maicena rellenas de abundante dulce de leche y rodeadas de coco rallado. El acompañamiento perfecto para el mate.',
		image: '/alfajores_de_maicena.png',
		time: '1h',
		difficulty: 'Baja',
		ingredients: [
			'200g de harina de trigo 0000',
			'300g de fécula de maíz (maicena)',
			'2 cdta. de polvo de hornear y 1/2 cdta. de bicarbonato',
			'200g de manteca blanda (pomada)',
			'150g de azúcar impalpable',
			'3 yemas de huevo grandes',
			'1 cdta. esencia de vainilla y ralladura de 1 limón',
			'Dulce de leche estilo repostero',
			'Coco rallado para el borde'
		],
		steps: [
			'Tamizar en un bol la harina, la maicena, el polvo para hornear y el bicarbonato.',
			'En otro recipiente, batir la manteca blanda con el azúcar hasta que quede cremosa. Incorporar luego las yemas de una en una, la esencia y la ralladura de limón.',
			'Añadir los ingredientes secos a la mezcla húmeda e integrar con cornet o manos frías sin amasar demasiado, solo hasta formar el bollo.',
			'Dejar descansar la masa envuelta en papel film en la heladera durante unos 30 minutos.',
			'Estirar la masa (1/2 cm de grosor), cortar discos (tapas) y ubicarlos en asadera. Hornear a 180°C (horno medio) por 10 a 12 minutos (deben quedar blanquitas por encima y apenitas doradas abajo).',
			'Una vez frías las tapas, untar generosamente el dulce de leche repostero y tapar sin apretar mucho. Rodar el borde en un bolllito con coco rallado.'
		]
	},
	{
		id: 'milanesa-a-la-napolitana',
		title: 'Milanesa a la Napolitana',
		description: 'La leyenda de Buenos Aires. Milanesa de carne empanizada al horno, cubierta con salsa de tomate, jamón, queso derritido y orégano. Servida con papas fritas.',
		image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=800',
		time: '45m',
		difficulty: 'Baja',
		ingredients: [
			'4 fetas de nalga, peceto o bola de lomo de vaca feteadas finas',
			'3 huevos frescos',
			'2 Dientes de ajo y Perejil picado a gusto',
			'Pan rallado c/n (mejor mezcla casero con industrial)',
			'Salsa de tomate tipo pomodoro (1 taza)',
			'150g de jamón cocido en fetas',
			'200g de queso muzzarella o queso cremoso',
			'Orégano y sal a gusto. Aceite de girasol para freír'
		],
		steps: [
			'Retirar nervios o bordes de las fetas de carne. Batir intensamente los huevos en un plato hondo incorporando sal, pimienta, ajo y abundante perejil picado.',
			'Sumergir cada disco de carne en el ligue y luego empanarlos sobre el pan rallado generosamente, apretando con los dedos y la palma para que pegue muy bien (esto es clave para el rebozado).',
			'Freír las milanesas a fuego fuerte hasta apenas dorarlas (o hacerlas al horno para versión liviana). Retirarlas y escurrir en servilletas.',
			'Acomodar las milanesas doradas en asadera, poner encima a cada una dos cucharaditas esparcidas de la salsa de tomate, una feta generosa de jamón y coronar con unas buenas tiras gruesas de queso mozzarella.',
			'Introducir la bandeja al horno al máximo (250°C) durante unos 5 minutos solo para derretir (y quizás gratinar) el queso. Al salir, espolvorearles orégano. Servir junto a unas muy buenas papas fritas a bastón.'
		]
	}
];
