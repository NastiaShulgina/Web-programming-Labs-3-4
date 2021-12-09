use cookie;
delete from cooki_cokie
where id >0;
insert into cooki_cokie( city, showed, price, name, experience, body, id,image) 
values('New York','yes',5,'Will Smith',3,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!',1,'https://deanjilo.files.wordpress.com/2020/04/dff9dd0bf31cc4bf8eae834459be56dd.jpg?w=1304&h=1500&crop=1'),
('London',  'yes',  10,'Guy Fieri',20,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!',  2,'https://pbs.twimg.com/media/EalRkPKWoAM7eoF.jpg:large'),
('London',  'yes',  '100', 'Gordon Ramsay',30,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!',  3,'https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-gordon-ramsay-1612073061.jpg' ),
('Los Angeles',  'yes',  75,'Zendaya', 10,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!',  4,'https://media1.popsugar-assets.com/files/thumbor/23dcKendbr1_zEO6DLmEqgMc1Ow/0x0:1997x1997/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/26/284/n/41541398/a8f792245c9b0ef7a992c9.16535828_/i/What-Movies-Has-Zendaya-Been.jpg'),
('Lviv',  'no',  1, 'Olesya Buryak', 1, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!',  5,'https://tvoemisto.tv/media/gallery/full/2/7/2782751_n.jpg'),
('Kyiv',  'no',  200,'Master Chef',  15,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!',  6,'https://s1.tchkcdn.com/i/11/1/389334_d99a2976_73d_26867509_2002440903361291_528472936676327424_n1.jpg'),
('Odesa',  'no',  3,'Petro Petrenko', 25,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!',  7,'https://static9.depositphotos.com/1729220/1230/i/600/depositphotos_12302453-stock-photo-chef-of-the-future.jpg' ),
('California',  'no',  150,'Rachel Ray', 28,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis sapiente autem repellat alias quo natus qui hic officia iusto!',  8,'https://www.rachaelrayshow.com/sites/default/files/styles/video_1920x1080/public/images/2019-05/rach_101_pasta.jpg?itok=2GBbX5v7' );

select * from cooki_cokie;

