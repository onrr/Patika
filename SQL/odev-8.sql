-- test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
CREATE TABLE employee (
    id INT,
    name VARCHAR(50),
    birthday DATE,
    email VARCHAR(100)
)

-- Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 5 adet veri ekleyelim.
insert into employee (id, name, email, birthday) values (1, 'Roscoe Firmage', 'rfirmage0@blog.com', null);
insert into employee (id, name, email, birthday) values (2, 'Reinaldo Benion', 'rbenion1@flavors.me', '1995-10-14');
insert into employee (id, name, email, birthday) values (3, 'Colver Lubeck', 'clubeck2@reuters.com', '1992-06-18');
insert into employee (id, name, email, birthday) values (4, 'Tabb Newcomen', 'tnewcomen3@mail.ru', '1983-03-14');
insert into employee (id, name, email, birthday) values (5, 'Myer Kaas', 'mkaas4@biblegateway.com', '2000-05-09');

-- Sütunların her birine göre diğer sütunları güncelleyecek 3 adet UPDATE işlemi yapalım.
UPDATE employee SET name = 'Sascha Bouldon', email = 'test12312@asgdasdksa.com' WHERE id = 2
UPDATE employee SET name = 'Kaine Fehely' WHERE name = 'Colver Lubeck'
UPDATE employee SET email = 'club321@asdas.com' WHERE email = 'clubeck2@reuters.com'

-- Sütunların her birine göre ilgili satırı silecek 3 adet DELETE işlemi yapalım.
DELETE FROM employee WHERE id = 3
DELETE FROM employee WHERE name = 'Myer Kaas'
DELETE FROM employee WHERE birthday = '1983-03-14'

