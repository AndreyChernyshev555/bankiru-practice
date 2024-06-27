/**
 * Напишите функцию makeRequests(urls, maxRequests), получающую
 * на вход массив ссылок urls и число maxRequests - максимальное
 * количество одновременных запросов. Запросы должны выполняться 
 * максимально быстрым образом. 
 * 
 * Пример: массив длинной 10, максимальное кол-во запросов 3.
 * Сразу делаете 3 запроса. Как только любой из них выполнился, 
 * сразу же начинать делать 4ый, а не дожидаетесь окончания двух других.
 * 
 * Условия:
 * 1. Одновременно должно выполняться не более указанного
 *    числа запросов.
 * 2. Должен возвращаться promise, резолвящийся в массив результатов
 *    в той же последовательности, что и адреса запросов.
 * 3. Представить, что все запросы успешно резолвятся и не обрабатывать
 *    ошибки.
 * 4. Если успешно справился с тремя пунктами, то реализовать такую логику:
 *    При падении любого из запросов вернувшийся промис
 *    должен реджектиться с той же ошибкой, что и оригинальный
 *    запрос.
 *
 * @param  {string[]} urls      массив с адресами
 * @param  {number} maxRequests максимальное количество одновременных запросов
 * @return {Promise}
 */


/*
	Не особо уверен в решении,
	поэтому применим подход орков вархаммера: 
	поверим, что асинхронность реализована,
	и асинхронность материализуется
*/ 
export const makeRequests = (urls, maxRequests) => {						
	let buttHurt = Array.apply(null, Array(maxRequests)).map( 				//Создадим массив промисов длинной в maxRequests
		function (promiseNum) {
			return new Promise(async (resolve, reject) => {
				var answers = [];
				const count = promiseNum*maxRequests;						//Индекс первого обрабатываемого url. 
				var ending = count + maxRequests;							//Индекс последнего url. Если urls.length не кратно maxRequests, то это нужно учесть, 
				if (promiseNum === (maxRequests-1)) ending = url.length;	//поэтому последний промис всегда дорабатывает до исчерпания адресов
				for (let i = count; i < ending; i++) {
					let response = await fetch(url[i]);						//Ждём fetch, насколько я понял -- он тоже возвращает промис
					if (response.ok) answers.push(response.json());			//Если ответ пришел, кладем его в массив ответов
					else reject(new Error("Error"));						//Если получили ошибку, то реджектим
				}
				resolve(answers);
			});
		}
	);
	return new Promise.all(buttHurt).then(values); 							//Возвращаемый промис либо выдает массив всех ответов, либо ошибку с того запроса, на котором упали	
};
