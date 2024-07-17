//Module containing an array of the six computers using objects to contain the information for each PC. 
const computers = [
	{
		builder: 'Carson Meikle',
		name: 'PC1',
        image: './pictures/pc1.webp',
		price: '2000',
		cpu: 'Ryzen 7 7700x',
		gpu: '6950xt',
		ram: 'DDR5 32GB',
        fans: '6',
		games: [
            { name: 'Fortnite', resolution: '4K', fps: 180 },
            { name: 'Valorant', resolution: '4K', fps: 240 },
            { name: 'Minecraft', resolution: '4K', fps: 900 }
        ]
    },
	{
		builder: 'Carson Meikle',
		name: 'PC2',
        image: './pictures/pc2.webp',
		price: '1500',
		cpu: 'Ryzen 5 5600x',
		gpu: '3060ti',
		ram: 'DDR4 16GB',
        fans: '5',
		games: [
            { name: 'Fortnite', resolution: '1440p', fps: 120 },
            { name: 'Valorant', resolution: '4K', fps: 120 },
            { name: 'Minecraft', resolution: '4K', fps: 700 }
        ]
    },
	{
		builder: 'Carson Meikle',
		name: 'PC3',
        image: './pictures/pc3.webp',
		price: '1200',
		cpu: 'Ryzen 5 3600x',
		gpu: '2060 Super',
		ram: 'DDR4 16GB',
        fans: '5',
		games: [
            { name: 'Fortnite', resolution: '1080p', fps: 120 },
            { name: 'Valorant', resolution: '1440p', fps: 144 },
            { name: 'Minecraft', resolution: '1440p', fps: 500 }
        ]
    },
	{
		builder: 'Carson Meikle',
		name: 'PC4',
        image: './pictures/pc4.webp',
		price: '1200',
		cpu: 'Ryzen 5 5600g',
		gpu: '3060ti',
		ram: 'DDR4 16GB',
        fans: '4',
		games: [
            { name: 'Fortnite', resolution: '1440p', fps: 144 },
            { name: 'Valorant', resolution: '1440p', fps: 144 },
            { name: 'Minecraft', resolution: '1440p', fps: 500 }
        ]
    },
	{
		builder: 'Carson Meikle',
		name: 'PC5',
        image: './pictures/pc5.webp',
		price: '800',
		cpu: 'Intel i3 9100F',
		gpu: '2060 Super',
		ram: 'DDR4 16GB',
        fans: '4',
		games: [
            { name: 'Fortnite', resolution: '1080p', fps: 120 },
            { name: 'Valorant', resolution: '1080p', fps: 144 },
            { name: 'Minecraft', resolution: '1080p', fps: 500 }
        ]
    },
	{
		builder: 'Carson Meikle',
		name: 'PC6',
        image: './pictures/pc6.webp',
		price: '400',
		cpu: 'Intel i3 9100F',
		gpu: 'Gtx 1050',
		ram: 'DDR4 16GB',
        fans: '3',
		games: [
            { name: 'Fortnite', resolution: '1080p', fps: 100 },
            { name: 'Valorant', resolution: '1080p', fps: 100 },
            { name: 'Minecraft', resolution: '1080p', fps: 120 }
        ]
    },
]

export default computers