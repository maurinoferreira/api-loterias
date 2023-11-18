import puppeteer from "puppeteer";


async function getNumbers(){


   const browser = await puppeteer.launch({headless:true, executablePath: '/usr/bin/google-chrome',  args: ['--no-sandbox']});

   const page = await browser.newPage();

   await page.goto("https://www.megaloterias.com.br/resultados");

   const duplasena = {};

   const item = await page.$eval("header  div  div.lottery-totem__header-grid__result  div.result__title h2", h2 => h2.textContent);
   const data = await page.$eval("header  div  div.lottery-totem__header-grid__result  div.result__draw-date", text => text.textContent);
   const local = await page.$eval("header div div.lottery-totem__header-grid__result div.result__local  div", text => text.textContent);
   const concurso = await page.$eval("section.lottery-totem.lot-dupla-sena > header > div > div.lottery-totem__header-grid__result > div.result__draw", text => text.textContent);
   const valor = await page.$eval("header  div  div.lottery-totem__header-grid__result  div.result__prize  div.result__prize__wrap", text => text.textContent);
   
   const sorteio1 = await page.$$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__body > div > div.result__content__wrap.result__content__wrap--tens.text-center > div:nth-child(2) > div.lot-bg-light", text => text.map(itens => itens.textContent));

   console.log(sorteio1);

   const premiacao = await page.$$eval("section.lottery-totem.lot-dupla-sena  div  div.lottery-totem__body  div  div.result__content__wrap.result__content__wrap--tens.text-center  table:nth-child(3)  tbody  tr:nth-child(2) > td", text => text.map(itens => itens.textContent));
   const premiacao1 = await page.$$eval("section.lottery-totem.lot-dupla-sena  div  div.lottery-totem__body  div  div.result__content__wrap.result__content__wrap--tens.text-center  table:nth-child(3)  tbody  tr:nth-child(3) > td", text => text.map(itens => itens.textContent));
   const premiacao2 = await page.$$eval("section.lottery-totem.lot-dupla-sena  div  div.lottery-totem__body  div  div.result__content__wrap.result__content__wrap--tens.text-center  table:nth-child(3)  tbody  tr:nth-child(4) > td", text => text.map(itens => itens.textContent));
   const premiacao3 = await page.$$eval("section.lottery-totem.lot-dupla-sena  div  div.lottery-totem__body  div  div.result__content__wrap.result__content__wrap--tens.text-center  table:nth-child(3)  tbody  tr:nth-child(5) > td", text => text.map(itens => itens.textContent));

   console.log(premiacao)
   console.log(premiacao1)
   console.log(premiacao2)
   console.log(premiacao3)


   const sorteio2 = await page.$$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__body > div > div.result__content__wrap.result__content__wrap--tens.text-center > div:nth-child(5) > div", text => text.map(itens => itens.textContent));

   console.log(sorteio2)


   const premiacao4 = await page.$$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__body > div > div.result__content__wrap.result__content__wrap--tens.text-center > table:nth-child(7) > tbody > tr:nth-child(2)  > td", text => text.map(itens => itens.textContent));
   const premiacao5 = await page.$$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__body > div > div.result__content__wrap.result__content__wrap--tens.text-center > table:nth-child(7) > tbody > tr:nth-child(3)  > td", text => text.map(itens => itens.textContent));
   const premiacao6 = await page.$$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__body > div > div.result__content__wrap.result__content__wrap--tens.text-center > table:nth-child(7) > tbody > tr:nth-child(4)  > td", text => text.map(itens => itens.textContent));
   const premiacao7 = await page.$$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__body > div > div.result__content__wrap.result__content__wrap--tens.text-center > table:nth-child(7) > tbody > tr:nth-child(5)  > td", text => text.map(itens => itens.textContent));


   console.log(premiacao4)
   console.log(premiacao5)
   console.log(premiacao6)
   console.log(premiacao7)

   const acumulado = await page.$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__body > div > div.result__acumulations.text-center > div:nth-child(1) > div.lot-color", text => text.textContent);
   const arrecadacao = await page.$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__body > div > div.result__acumulations.text-center > div:nth-child(3) > div.lot-color", text => text.textContent);
   const valorProximoConcurso = await page.$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__aside > div > div.lottery-totem__nextdraw > div.card.mt-0 > div > div.lottery-totem__nextdraw__info > div.lottery-totem__nextdraw__prize > div", text => text.textContent);
   const resultado = await page.$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__aside > div > div.lottery-totem__nextdraw > div.card.mt-0 > div > div.lottery-totem__nextdraw__info > div.lottery-totem__nextdraw__is-jackpot", text => text.textContent);
   const proximoSorteio = await page.$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__aside > div > div.lottery-totem__nextdraw > div.card.mt-0 > div > div.lottery-totem__nextdraw__info > div.lottery-totem__nextdraw__draw-date > strong", text => text.textContent);
   const proximoConcurso = await page.$eval("section.lottery-totem.lot-dupla-sena > div > div.lottery-totem__aside > div > div.lottery-totem__nextdraw > div.card.mt-0 > div > div.lottery-totem__nextdraw__info > div.lottery-totem__nextdraw__draw.d-none.d-lg-block > strong", text => text.textContent);

   console.log(acumulado)

   const sort = {}
   const sort1 = {}
   const premios = {}
   const premios1 = {}
   const premios2 = {}
   const premios3 = {}
   const premios4 = {}
   const premios5 = {}
   const premios6 = {}
   const premios7 = {}
  
  
   duplasena.nome = item;
   duplasena.data = data.replace(/[^0-9/]/g,"").trim();
   duplasena.concurso = concurso.replace(/\D/g, "");
   duplasena.local = local.replace("Local de Sorteio:", "").trim().toUpperCase();
   duplasena.valor = valor;

    sort.numerosSorteados = sorteio1;

        premios.jogo = premiacao[0];
        premios.ganhadores = premiacao[1];
        premios.premio = premiacao[2];

    sort.sena = premios;

        premios1.jogo = premiacao1[0];
        premios1.ganhadores = premiacao1[1];
        premios1.premio = premiacao1[2];


    sort.quina = premios1;

        premios2.jogo = premiacao2[0];
        premios2.ganhadores = premiacao2[1];
        premios2.premio = premiacao2[2];

    sort.quadra = premios2;

        premios3.jogo = premiacao3[0];
        premios3.ganhadores = premiacao3[1];
        premios3.premio = premiacao3[2];

    sort.terno = premios3;

   duplasena.primeiroSorteio = sort

    sort1.numerosSorteados = sorteio2;

        premios4.jogo = premiacao4[0];
        premios4.ganhadores = premiacao4[1];
        premios4.premio = premiacao4[2];

    sort1.sena = premios4;

        premios5.jogo = premiacao5[0];
        premios5.ganhadores = premiacao5[1];
        premios5.premio = premiacao5[2];

    sort1.quina = premios5;

        premios6.jogo = premiacao6[0];
        premios6.ganhadores = premiacao6[1];
        premios6.premio = premiacao6[2];

    sort1.quadra = premios6;

        premios7.jogo = premiacao7[0];
        premios7.ganhadores = premiacao7[1];
        premios7.premio = premiacao7[2];

    sort1.terno = premios7;

   duplasena.segundoSorteio = sort1 
   duplasena.acumulado = acumulado;
   duplasena.arrecadacaoTotal = arrecadacao;
   duplasena.dataProximoSorteio = proximoSorteio;
   duplasena.valorProximoConcurso = valorProximoConcurso;
   duplasena.resultado = resultado;
   duplasena.proximoConcurso = proximoConcurso;



   await browser.close();


   return duplasena;

}

export default getNumbers();