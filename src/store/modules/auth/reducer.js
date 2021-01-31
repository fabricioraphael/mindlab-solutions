import produce from 'immer';


const INITIAL_STATE = { 
  token: null,
  signed: false,
  loading: false,
  blogPosts: [
    {id: 1, title: 'Seja você também um voluntário!', author: 'Fernanda Kenner', dateDay: 10, dateMonth: 'Abril', preview: 'Conheci o projeto estruturando em 2017 e fiquei apaixonada, participei de algumas reuniões, ações e esporadicamente visitava a creche sorriso, me ausentei por algum tempo', content: 'Conheci o projeto estruturando em 2017 e fiquei apaixonada, participei de algumas reuniões, ações e esporadicamente visitava a creche sorriso, me ausentei por algum tempo e no natal passado fizemos uma campanha na loja para arrecadar brinquedos e fomos entregar para as crianças da creche, foi um momento muito especial, senti ali uma necessidade de priorizar essas ações.  Na virada do ano, uma das minhas metas era dedicar as ações sociais.  No início da pandemia, onde o mundo parou diante de um vírus invisível e o pânico tomou conta das pessoas, pensei, se está difícil para mim que tive minha loja fechada, mais tenho a possibilidade de trabalhar on-line, imagina para quem já vive em dificuldades, o que já era difícil ficou insustentável... isso me causou desconforto, angústia, e me fez agir, fortalecendo e curando meus medos.  Comecei por meio das redes sociais a pedir socorro p essas pessoas, uma ação que começou pequena, a cada dia cresce.  Acredito que essa pandemia veio para mostrar o nosso melhor, a nossa solidariedade, empatia e que o amor tem que ser mais contagiosos que esse vírus....  Inicie essa campanha no início de abril e todas as semanas faço as entregas, arrecadamos de tudo, comida, roupas, brinquedos, material de limpeza, cobertores...  Me emociono a cada entrega, encontrei de fato meu propósito de vida, impactar pessoas, mais do que alimentos, levamos amor...  São muitas histórias que tocam a alma...  Entre tantas me emocionei com a Josélia, menina de 8 anos que me pediu um lençol e assim que entreguei ela deu pulos de alegria, fiquei sabendo que aquela família vivia em uma situação de miséria, que aquelas crianças nem cama tinham...  Consegui uma cama, qdo entreguei p Josélia ela ajoelhou e agradeceu a Deus sua primeira cama, foi difícil conter as lágrimas...  Vi nos olhos daquela menina tanta gratidão, amor e fé. Entendi que não adianta ser luz e não iluminar nossos irmãos... e que na vida, nada tem sentido se não tocarmos o coração do outro...  Agradeço a Deus a oportunidade de me tornar um ser humano melhor a cada dia, existe uma lei implacável: a lei do retorno, todo amor que vc espalha volta multiplicado para você.  Juntos somos mais fortes e vamos transformar esse momento difícil em aprendizado e mudança.  Junte-se a nós!!! ', image: 'assets/img/features/features-course-1.jpg', imageSm: './assets/img/blog/blog-sm-img-1.jpg'},
    {id: 2, title: 'Projeto Estruturando', author: 'Angela Castilho', dateDay: 17, dateMonth: 'Maio', preview: 'Nosso  projeto  nasceu em 2015 assim: Acordei com uma vontade incontrolável de ir na FAVELA DO LIXÃO  na Estrutural,  e não dava para esperar nem para o próximo o dia. Tinha que ser..', content: 'Nosso  projeto  nasceu em 2015 assim: Acordei com uma vontade incontrolável de ir na FAVELA DO LIXÃO  na Estrutural,  e não dava para esperar nem para o próximo o dia. Tinha que ser naquele dia! Peguei o que achei na dispensa, que não era mais que 1  saco de arroz, outro de feijão,  um  de biscoito e uma caixa de chocolates  e fomos. Eu e Hugo, meu motorista e parceiro de aventura. Saímos sem saber nem o endereço.  Mas, Google Map afinal existe, ne? Chegamos na Favela Santa Luzia mas, não sabíamos o que fazer... No caminho liguei para minha filha Manuella, que morava então em Paris e cursava na SciencePol um mestrado na área de inovações e projetos sociais e perguntei: -Como a gente faz para ajudar uma comunidade? Ela respondeu: -Só vai... O resto acontece... Fomos! Durante o  primeiro ano,  nos dedicamos a uma imersão na comunidade da favela  Santa Luzia. Caminhamos pelas ruas, visitando e ajudando familias e creches, participando de reuniões nas associações, no Conselho tutelar...conhecendo as demandas.  Fomos até a COHAB, nos reunimos com o então responsável, arquiteto Gilson Paranhos, para entendermos melhor a situação legal, ou ilegal de ocupação territorial   daquela comunidade Durante o período  de 2015 e 2016, ajudamos na  alimentação  de 300 crianças de 6 diferentes creches criadas e administradas pela própria comunidade e entregávamos  também  cestas básicas,  para as mulheres crecheiras que trabalhavam como voluntárias nestas mesmas creches.   Em 2017  decidimos constituir legalmente a ONG ESTRUTURANDO ( CNPJ 27.568.052). A partir de então adotamos um novo jeito de conduzir os trabalhos. Elegemos inicialmente uma entre as creches que conhecemos lá   para estabelecer uma maior parceria, apoiando  através dela as  iniciativas da  comunidade. Construimos então um espaço físico , contíguo a está creche,  a  Sorriso, e também reformamos  toda área da própria creche. Abrimos uma porta unindo o espaço físico  das 2 ONGs ( ESTRUTURANDO E SORRISO) e lá são  acolhidas  em torno de 60 crianças entre zero e 6 anos das 6h da manhã até as 17 hs onde mantemos 5 refeições diárias,  atividades pedagógicas,  sempre que possível passeios externos, festinhas comemorativas, etc. Continuamos ajudando com 2 cestas básicas mensais as mulheres crecheiras (voluntárias da própria comunidade) que cuidam da creche Sorriso. Fazemos um trabalho de parceria . Acreditamos que apoiar iniciativas que nascem dentro da comunidade é mais genuíno e promissor.', image: 'assets/img/features/features-course-2.jpg', imageSm: './assets/img/blog/blog-sm-img-2.jpg'},
    {id: 3, title: 'Dia do Cinema', author: 'Angela Castilho', dateDay: '03', dateMonth: 'Junho', preview: 'Mês das crianças, 21 de outubro, 2017 e o Shoping Casa Park ofereceu a sala de cinema com o filme "O Pica-Pau" , para nossas crianças...', content: 'Mês das crianças, 21 de outubro, 2017 e o Shoping Casa Park ofereceu a sala de cinema com o filme "O Pica-Pau" , para nossas crianças curtirem, com direito a pipoca e refrigerante. O Ônibus que contratamos pegou as crianças na comunidade e fomos 6 voluntários juntos levando a turma para o shopping. A maioria nunca tinha assistido filme em um cinema. A alegria deles era visível em seus olhinhos hipnotizados . As gargalhadas encantadas diante das cenas mais simples, lambuzados de pipoca era contagiante , e nos fazia rir com eles. Sairmos com as crianças para passeios culturais fora da comunidade é um dos programas que mais gostamos de fazer. Acreditamos que é pela educação que conseguiremos mudar a realidade delas. Como é gratificante fazer diferenca na vida de uma criança !', image: 'assets/img/features/features-course-3.jpg', imageSm: './assets/img/blog/blog-sm-img-3.jpg'},
  ],
};

export default function auth( state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;

      } 
      
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;

        break;
      } 
      
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      } 
      
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}