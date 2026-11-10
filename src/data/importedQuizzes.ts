import type { Question } from '../types';

export const IMPORTED_QUIZZES_BY_UNIT: Record<string, Record<string, Question[]>> = {
  "unit1": {
    "avaliacao": [
      {
        "id": "unit1_avaliacao_1",
        "text": "Questão 1 (ENEM/PPL ADAPTADA) O Ministério da Saúde acompanha com preocupação a difusão da tuberculose no Brasil. Um sistema de vigilância baseia-se no acompanhamento sistemático das taxas de incidência dessa doença nos estados. Depois de credenciar alguns estados a receberem recursos, em 2006, passou a ser de grande importância definir prioridades para a alocação de recursos de combate e de prevenção, levando em consideração as taxas de incidência nos anos de 2000 e 2004, conforme o quadro seguinte. ESTADO TAXA DE INCIDÊNCIA 2000 TAXA DE INCIDÊNCIA 2004 Amapá 9,0 37,1 Amazonas 72,8 69,0 Goiás 20,5 16,7 Minas Gerais 0,3 27,2 Pernambuco 43,3 51,0 Rio de Janeiro 90,7 79,7 São Paulo 45,8 38,2 Disponível em: SINAM, 2006; IBGE, Censo 2000. Se a prioridade na distribuição de recursos for dada ao estado que tiver maior aumento absoluto em suas taxas de incidência, ela será dada para",
        "options": [
          "Amapá.",
          "Amazonas.",
          "Minas Gerais.",
          "Pernambuco.",
          "Rio de Janeiro."
        ],
        "correctIndex": 0,
        "explanation": "Calculando a variação absoluta (subtração direta): Amapá aumentou 28,1 (37,1 - 9,0); Minas Gerais aumentou 26,9 (27,2 - 0,3); Pernambuco aumentou 7,7. O maior aumento absoluto foi o do Amapá.",
        "contentHtml": "<strong>Questão 1 (ENEM/PPL ADAPTADA)</strong><br><br>\n                    O Ministério da Saúde acompanha com preocupação a difusão da tuberculose no Brasil. Um sistema de vigilância baseia-se no acompanhamento sistemático das taxas de incidência dessa doença nos estados. Depois de credenciar alguns estados a receberem recursos, em 2006, passou a ser de grande importância definir prioridades para a alocação de recursos de combate e de prevenção, levando em consideração as taxas de incidência nos anos de 2000 e 2004, conforme o quadro seguinte.<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px; text-align: left;\">ESTADO</th>\n                                <th style=\"padding: 10px; text-align: center;\">TAXA DE INCIDÊNCIA 2000</th>\n                                <th style=\"padding: 10px; text-align: center;\">TAXA DE INCIDÊNCIA 2004</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Amapá</td><td style=\"padding: 10px; text-align: center;\">9,0</td><td style=\"padding: 10px; text-align: center;\">37,1</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Amazonas</td><td style=\"padding: 10px; text-align: center;\">72,8</td><td style=\"padding: 10px; text-align: center;\">69,0</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Goiás</td><td style=\"padding: 10px; text-align: center;\">20,5</td><td style=\"padding: 10px; text-align: center;\">16,7</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Minas Gerais</td><td style=\"padding: 10px; text-align: center;\">0,3</td><td style=\"padding: 10px; text-align: center;\">27,2</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Pernambuco</td><td style=\"padding: 10px; text-align: center;\">43,3</td><td style=\"padding: 10px; text-align: center;\">51,0</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Rio de Janeiro</td><td style=\"padding: 10px; text-align: center;\">90,7</td><td style=\"padding: 10px; text-align: center;\">79,7</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">São Paulo</td><td style=\"padding: 10px; text-align: center;\">45,8</td><td style=\"padding: 10px; text-align: center;\">38,2</td></tr>\n                        </tbody>\n                    </table>\n                    <div style=\"font-size: 0.8rem; color: #718096; text-align: right; margin-bottom: 15px;\">Disponível em: SINAM, 2006; IBGE, Censo 2000.</div>\n                    Se a prioridade na distribuição de recursos for dada ao estado que tiver maior aumento absoluto em suas taxas de incidência, ela será dada para",
        "optionsHtml": [
          "Amapá.",
          "Amazonas.",
          "Minas Gerais.",
          "Pernambuco.",
          "Rio de Janeiro."
        ],
        "explanationHtml": "Calculando a variação absoluta (subtração direta): Amapá aumentou 28,1 (37,1 - 9,0); Minas Gerais aumentou 26,9 (27,2 - 0,3); Pernambuco aumentou 7,7. O maior aumento absoluto foi o do Amapá."
      },
      {
        "id": "unit1_avaliacao_2",
        "text": "Questão 2 (ENEM/PPL ADAPTADA) Camile gosta de caminhar em uma calçada em torno de uma praça circular que possui 500 metros de extensão, localizada perto de casa. A praça, bem como alguns locais ao seu redor e o ponto de onde inicia a caminhada, estão representados na figura: Em uma tarde, Camile caminhou 4 125 metros, no sentido anti-horário, e parou. Qual dos locais indicados na figura é o mais próximo de sua parada?",
        "options": [
          "Centro cultural.",
          "Drogaria.",
          "Lan house.",
          "Ponto de partida.",
          "Padaria."
        ],
        "correctIndex": 4,
        "explanation": "Dividindo a distância total pela extensão da pista: 4125 / 500 = 8 voltas completas e sobra um resto de 125 metros. Como a pista tem 500m, 125m equivale exatamente a 1/4 de volta (ou 2/8). Caminhando no sentido anti-horário, 1/4 de volta a deixa exatamente em frente à Padaria.",
        "contentHtml": "<strong>Questão 2 (ENEM/PPL ADAPTADA)</strong><br><br>\n                    Camile gosta de caminhar em uma calçada em torno de uma praça circular que possui 500 metros de extensão, localizada perto de casa. A praça, bem como alguns locais ao seu redor e o ponto de onde inicia a caminhada, estão representados na figura:<br>\n                    <img src=\"/imagens/praca.png\" alt=\"Esquema da Praça Circular\" class=\"img-center\"><br>\n                    Em uma tarde, Camile caminhou 4 125 metros, no sentido anti-horário, e parou. Qual dos locais indicados na figura é o mais próximo de sua parada?",
        "optionsHtml": [
          "Centro cultural.",
          "Drogaria.",
          "Lan house.",
          "Ponto de partida.",
          "Padaria."
        ],
        "explanationHtml": "Dividindo a distância total pela extensão da pista: 4125 / 500 = 8 voltas completas e sobra um resto de 125 metros. Como a pista tem 500m, 125m equivale exatamente a 1/4 de volta (ou 2/8). Caminhando no sentido anti-horário, 1/4 de volta a deixa exatamente em frente à Padaria."
      },
      {
        "id": "unit1_avaliacao_3",
        "text": "Questão 3 (INÉDITA) Estamos vivendo em um período em que a água está ficando escassa no planeta. De acordo com a Organização das Nações Unidas (ONU), cada pessoa deve consumir, diariamente, 50 litros de água para suprir suas necessidades diárias. Nesse sentido, João consome, em média, por dia, 57 litros de água. Mensalmente, ele ultrapassa a orientação da ONU em",
        "options": [
          "7 litros.",
          "107 litros.",
          "210 litros.",
          "1 500 litros.",
          "1 710 litros."
        ],
        "correctIndex": 2,
        "explanation": "João consome 7 litros a mais por dia do que o recomendado (57 - 50 = 7). Considerando um mês comercial padrão de 30 dias: 7 litros/dia x 30 dias = 210 litros no mês.",
        "contentHtml": "<strong>Questão 3 (INÉDITA)</strong><br><br>\n                    Estamos vivendo em um período em que a água está ficando escassa no planeta. De acordo com a Organização das Nações Unidas (ONU), cada pessoa deve consumir, diariamente, 50 litros de água para suprir suas necessidades diárias. Nesse sentido, João consome, em média, por dia, 57 litros de água. Mensalmente, ele ultrapassa a orientação da ONU em",
        "optionsHtml": [
          "7 litros.",
          "107 litros.",
          "210 litros.",
          "1 500 litros.",
          "1 710 litros."
        ],
        "explanationHtml": "João consome 7 litros a mais por dia do que o recomendado (57 - 50 = 7). Considerando um mês comercial padrão de 30 dias: 7 litros/dia x 30 dias = 210 litros no mês."
      },
      {
        "id": "unit1_avaliacao_4",
        "text": "Questão 4 (ENEM/PPL) Uma loja decide premiar seus clientes. Cada cliente receberá um dos seis possíveis brindes disponíveis, conforme sua ordem de chegada na loja. Os brindes a serem distribuídos são: uma bola, um chaveiro, uma caneta, um refrigerante, um sorvete e um CD, nessa ordem. O primeiro cliente da loja recebe uma bola, o segundo recebe um chaveiro, o terceiro recebe uma caneta, o quarto recebe um refrigerante, o quinto recebe um sorvete, o sexto recebe um CD, o sétimo recebe uma bola, o oitavo recebe um chaveiro, e assim sucessivamente, segundo a ordem dos brindes. O milésimo cliente receberá de brinde um(a):",
        "options": [
          "Bola.",
          "Caneta.",
          "Refrigerante.",
          "Sorvete.",
          "CD."
        ],
        "correctIndex": 2,
        "explanation": "Como são 6 brindes que se repetem ciclicamente, dividimos 1000 por 6. O quociente é 166 (voltas completas no ciclo) e o resto é 4. O quarto brinde da sequência é o refrigerante (1º bola, 2º chaveiro, 3º caneta, 4º refrigerante).",
        "contentHtml": "<strong>Questão 4 (ENEM/PPL)</strong><br><br>\n                    Uma loja decide premiar seus clientes. Cada cliente receberá um dos seis possíveis brindes disponíveis, conforme sua ordem de chegada na loja. Os brindes a serem distribuídos são: uma bola, um chaveiro, uma caneta, um refrigerante, um sorvete e um CD, nessa ordem. O primeiro cliente da loja recebe uma bola, o segundo recebe um chaveiro, o terceiro recebe uma caneta, o quarto recebe um refrigerante, o quinto recebe um sorvete, o sexto recebe um CD, o sétimo recebe uma bola, o oitavo recebe um chaveiro, e assim sucessivamente, segundo a ordem dos brindes.<br>\n                    O milésimo cliente receberá de brinde um(a):",
        "optionsHtml": [
          "Bola.",
          "Caneta.",
          "Refrigerante.",
          "Sorvete.",
          "CD."
        ],
        "explanationHtml": "Como são 6 brindes que se repetem ciclicamente, dividimos 1000 por 6. O quociente é 166 (voltas completas no ciclo) e o resto é 4. O quarto brinde da sequência é o refrigerante (1º bola, 2º chaveiro, 3º caneta, 4º refrigerante)."
      },
      {
        "id": "unit1_avaliacao_5",
        "text": "Questão 5 (ENEM) O gerente de um cinema fornece anualmente ingressos gratuitos para escolas. Este ano, serão distribuídos 400 ingressos para uma sessão vespertina e 320 ingressos para uma sessão noturna de um mesmo filme. Várias escolas podem ser escolhidas para receberem ingressos. Há alguns critérios para a distribuição dos ingressos: cada escola deverá receber ingressos para uma única sessão; todas as escolas contempladas deverão receber o mesmo número de ingressos; não haverá sobra de ingressos (ou seja, todos os ingressos serão distribuídos). O número mínimo de escolas que podem ser escolhidas para obter ingressos, segundo os critérios estabelecidos, é",
        "options": [
          "2.",
          "4.",
          "9.",
          "40.",
          "80."
        ],
        "correctIndex": 2,
        "explanation": "Para minimizar o número de escolas, devemos maximizar o número de ingressos por escola usando o MDC(400, 320) = 80. O número total de escolas será (400 / 80) + (320 / 80) = 5 + 4 = 9 escolas.",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                    O gerente de um cinema fornece anualmente ingressos gratuitos para escolas. Este ano, serão distribuídos 400 ingressos para uma sessão vespertina e 320 ingressos para uma sessão noturna de um mesmo filme. Várias escolas podem ser escolhidas para receberem ingressos. Há alguns critérios para a distribuição dos ingressos:<br><br>\n                    <ul>\n                        <li>cada escola deverá receber ingressos para uma única sessão;</li>\n                        <li>todas as escolas contempladas deverão receber o mesmo número de ingressos;</li>\n                        <li>não haverá sobra de ingressos (ou seja, todos os ingressos serão distribuídos).</li>\n                    </ul><br>\n                    O número mínimo de escolas que podem ser escolhidas para obter ingressos, segundo os critérios estabelecidos, é",
        "optionsHtml": [
          "2.",
          "4.",
          "9.",
          "40.",
          "80."
        ],
        "explanationHtml": "Para minimizar o número de escolas, devemos maximizar o número de ingressos por escola usando o MDC(400, 320) = 80. O número total de escolas será (400 / 80) + (320 / 80) = 5 + 4 = 9 escolas."
      },
      {
        "id": "unit1_avaliacao_6",
        "text": "Questão 6 (UFSM ADAPTADA) Estudos e simulações são necessários para melhorar o trânsito. Por exemplo: imagine que, de um terminal rodoviário, partam os ônibus de três empresas, A, B e C. Os ônibus da empresa A partem a cada 15 minutos; da empresa B, a cada 20 minutes; da empresa C, a cada 25 minutos. Às 7 h, partem simultaneamente 3 ônibus, um de cada empresa. A próxima partida simultânea dos ônibus das 3 empresas será às",
        "options": [
          "9 h.",
          "9 h 50min.",
          "10 h 30min.",
          "11 h.",
          "12 h."
        ],
        "correctIndex": 4,
        "explanation": "Devemos calcular o MMC de 15, 20 e 25 para descobrir após quantos minutos eles partirão juntos novamente. MMC(15, 20, 25) = 300 minutos. Convertendo para horas: 300 / 60 = 5 horas. Partindo das 7 h, a próxima partida será às 7 + 5 = 12 h.",
        "contentHtml": "<strong>Questão 6 (UFSM ADAPTADA)</strong><br><br>\n                    Estudos e simulações são necessários para melhorar o trânsito. Por exemplo: imagine que, de um terminal rodoviário, partam os ônibus de três empresas, A, B e C. Os ônibus da empresa A partem a cada 15 minutos; da empresa B, a cada 20 minutes; da empresa C, a cada 25 minutos.<br>\n                    Às 7 h, partem simultaneamente 3 ônibus, um de cada empresa. A próxima partida simultânea dos ônibus das 3 empresas será às",
        "optionsHtml": [
          "9 h.",
          "9 h 50min.",
          "10 h 30min.",
          "11 h.",
          "12 h."
        ],
        "explanationHtml": "Devemos calcular o MMC de 15, 20 e 25 para descobrir após quantos minutos eles partirão juntos novamente. MMC(15, 20, 25) = 300 minutos. Convertendo para horas: 300 / 60 = 5 horas. Partindo das 7 h, a próxima partida será às 7 + 5 = 12 h."
      },
      {
        "id": "unit1_avaliacao_7",
        "text": "Questão 7 (ENEM) Nosso calendário atual é embasado no antigo calendário romano, que, por sua vez, tinha como base as fases da lua. Os meses de janeiro, março, maio, julho, agosto, outubro e dezembro possuem 31 dias, e os demais, com exceção de fevereiro, possuem 30 dias. O dia 31 de março de certo ano ocorreu em uma terça-feira. Nesse mesmo ano, qual dia da semana será o dia 12 de outubro?",
        "options": [
          "Domingo.",
          "Segunda-feira.",
          "Terça-feira.",
          "Quinta-feira.",
          "Sexta-feira."
        ],
        "correctIndex": 1,
        "explanation": "Contamos os dias de 31 de março até 12 de outubro: Abril (30), Maio (31), Junho (30), Julho (31), Agosto (31), Setembro (30) e 12 dias de Outubro. Total = 30+31+30+31+31+30+12 = 195 dias. Dividindo 195 por 7, temos resto 6. Avançando 6 dias a partir de terça-feira (ou voltando 1 dia), chegamos a uma segunda-feira.",
        "contentHtml": "<strong>Questão 7 (ENEM)</strong><br><br>\n                    Nosso calendário atual é embasado no antigo calendário romano, que, por sua vez, tinha como base as fases da lua. Os meses de janeiro, março, maio, julho, agosto, outubro e dezembro possuem 31 dias, e os demais, com exceção de fevereiro, possuem 30 dias. O dia 31 de março de certo ano ocorreu em uma terça-feira.<br>\n                    Nesse mesmo ano, qual dia da semana será o dia 12 de outubro?",
        "optionsHtml": [
          "Domingo.",
          "Segunda-feira.",
          "Terça-feira.",
          "Quinta-feira.",
          "Sexta-feira."
        ],
        "explanationHtml": "Contamos os dias de 31 de março até 12 de outubro: Abril (30), Maio (31), Junho (30), Julho (31), Agosto (31), Setembro (30) e 12 dias de Outubro. Total = 30+31+30+31+31+30+12 = 195 dias. Dividindo 195 por 7, temos resto 6. Avançando 6 dias a partir de terça-feira (ou voltando 1 dia), chegamos a uma segunda-feira."
      },
      {
        "id": "unit1_avaliacao_8",
        "text": "Questão 8 (PUC-RS) Pitágoras estabeleceu a seguinte relação entre as sete notas musicais e os números racionais: Dó Ré Mi Fá Sol Lá Si Dó 1 8 9 64 81 3 4 2 3 16 27 128 243 1 2 Para encontrar o número 16 27 (relativo à nota Lá), multiplica-se 2 3 (o correspondente à nota Sol) por 8 9 . Assim, para obter 3 4 (relativo à nota Fá), deve-se multiplicar 64 81 (da nota Mi) por",
        "options": [
          "8 9",
          "9 8",
          "243 256",
          "256 243",
          "192 324"
        ],
        "correctIndex": 2,
        "explanation": "Para descobrir o fator multiplicador, basta efetuar a operação inversa (divisão): (3/4) ÷ (64/81) = (3/4) * (81/64) = 243/256.",
        "contentHtml": "<strong>Questão 8 (PUC-RS)</strong><br><br>\n                    Pitágoras estabeleceu a seguinte relação entre as sete notas musicais e os números racionais:<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem; text-align: center;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px;\">Dó</th>\n                                <th style=\"padding: 10px;\">Ré</th>\n                                <th style=\"padding: 10px;\">Mi</th>\n                                <th style=\"padding: 10px;\">Fá</th>\n                                <th style=\"padding: 10px;\">Sol</th>\n                                <th style=\"padding: 10px;\">Lá</th>\n                                <th style=\"padding: 10px;\">Si</th>\n                                <th style=\"padding: 10px;\">Dó</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7; background: #fff;\">\n                                <td style=\"padding: 10px;\">1</td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">8</span><span>9</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">64</span><span>81</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">2</span><span>3</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">16</span><span>27</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">128</span><span>243</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">1</span><span>2</span></div></td>\n                            </tr>\n                        </tbody>\n                    </table><br>\n                    Para encontrar o número <div class=\"frac\"><span class=\"nominator\">16</span><span>27</span></div> (relativo à nota Lá), multiplica-se <div class=\"frac\"><span class=\"nominator\">2</span><span>3</span></div> (o correspondente à nota Sol) por <div class=\"frac\"><span class=\"nominator\">8</span><span>9</span></div>. Assim, para obter <div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div> (relativo à nota Fá), deve-se multiplicar <div class=\"frac\"><span class=\"nominator\">64</span><span>81</span></div> (da nota Mi) por",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">8</span><span>9</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">9</span><span>8</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">243</span><span>256</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">256</span><span>243</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">192</span><span>324</span></div>"
        ],
        "explanationHtml": "Para descobrir o fator multiplicador, basta efetuar a operação inversa (divisão): (3/4) ÷ (64/81) = (3/4) * (81/64) = 243/256."
      },
      {
        "id": "unit1_avaliacao_9",
        "text": "Questão 9 (UFRJ ADAPTADA) Numa escola foi feito um levantamento para saber quais os tipos de calçados mais usados pelas crianças. Foi obtido o seguinte resultado: um terço usa sandálias; um quarto usa tênis; um quinto usa sapatos, e os 52 restantes usam outros tipos de calçados. Conclui-se que, pelos tipos de calçados encontrados, há nessa escola um total de",
        "options": [
          "280 crianças.",
          "270 crianças.",
          "260 crianças.",
          "250 crianças.",
          "240 crianças."
        ],
        "correctIndex": 4,
        "explanation": "Somando as frações conhecidas: 1/3 + 1/4 + 1/5 = 20/60 + 15/60 + 12/60 = 47/60. A fração restante para completar o todo é de 13/60, que corresponde às 52 crianças restantes. Se 13/60 = 52, então 1/60 = 4. Portanto, o total é 60 * 4 = 240 crianças.",
        "contentHtml": "<strong>Questão 9 (UFRJ ADAPTADA)</strong><br><br>\n                    Numa escola foi feito um levantamento para saber quais os tipos de calçados mais usados pelas crianças. Foi obtido o seguinte resultado: um terço usa sandálias; um quarto usa tênis; um quinto usa sapatos, e os 52 restantes usam outros tipos de calçados. Conclui-se que, pelos tipos de calçados encontrados, há nessa escola um total de",
        "optionsHtml": [
          "280 crianças.",
          "270 crianças.",
          "260 crianças.",
          "250 crianças.",
          "240 crianças."
        ],
        "explanationHtml": "Somando as frações conhecidas: 1/3 + 1/4 + 1/5 = 20/60 + 15/60 + 12/60 = 47/60. A fração restante para completar o todo é de 13/60, que corresponde às 52 crianças restantes. Se 13/60 = 52, então 1/60 = 4. Portanto, o total é 60 * 4 = 240 crianças."
      },
      {
        "id": "unit1_avaliacao_10",
        "text": "Questão 10 (UFSP) Um confeiteiro vende bolos de mesmo tamanho e cortados em fatias iguais. Certo dia, ele colocou três bolos à venda em fatias. Venderam-se 3 4 de um bolo de chocolate, 2 3 de um bolo de creme e 5 6 de um bolo de nozes. A fração correspondente ao que sobrou dos bolos é",
        "options": [
          "1 2",
          "1 4",
          "3 4",
          "5 6",
          "3 8"
        ],
        "correctIndex": 2,
        "explanation": "Calculamos o que sobrou de cada bolo individualmente: Chocolate sobrou 1/4 (1 - 3/4); Creme sobrou 1/3 (1 - 2/3); Nozes sobrou 1/6 (1 - 5/6). Somando as sobras: 1/4 + 1/3 + 1/6 = 3/12 + 4/12 + 2/12 = 9/12. Simplificando a fração por 3, obtemos 3/4.",
        "contentHtml": "<strong>Questão 10 (UFSP)</strong><br><br>\n                    Um confeiteiro vende bolos de mesmo tamanho e cortados em fatias iguais. Certo dia, ele colocou três bolos à venda em fatias. Venderam-se <div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div> de um bolo de chocolate, <div class=\"frac\"><span class=\"nominator\">2</span><span>3</span></div> de um bolo de creme e <div class=\"frac\"><span class=\"nominator\">5</span><span>6</span></div> de um bolo de nozes. A fração correspondente ao que sobrou dos bolos é",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">1</span><span>2</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">1</span><span>4</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">5</span><span>6</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">3</span><span>8</span></div>"
        ],
        "explanationHtml": "Calculamos o que sobrou de cada bolo individualmente: Chocolate sobrou 1/4 (1 - 3/4); Creme sobrou 1/3 (1 - 2/3); Nozes sobrou 1/6 (1 - 5/6). Somando as sobras: 1/4 + 1/3 + 1/6 = 3/12 + 4/12 + 2/12 = 9/12. Simplificando a fração por 3, obtemos 3/4."
      }
    ],
    "substituta": [
      {
        "id": "unit1_substituta_1",
        "text": "Questão 1 (ENEM ADAPTADA) No quadro a seguir, encontra-se a conta de água de uma mesma residência. Além do valor a pagar, a descrição mostra como calculá-lo, em função do consumo de água (em m³). Observe que, na conta de água, existe uma tarifa mínima e diferentes faixas de tarifação. Companhia de Saneamento TARIFAS DE ÁGUA /m³ Faixas de consumo Tarifa Consumo Valor - até 10 5,50 tarifa mínima 5,50 11 a 20 0,85 7 5,95 21 a 30 2,13 - - 31 a 50 2,13 - - acima de 50 2,36 - - Supondo que o consumo d'água duplique, o novo valor da conta será de",
        "options": [
          "R$ 22,90.",
          "R$ 106,46.",
          "R$ 43,82.",
          "R$ 17,40.",
          "R$ 22,52."
        ],
        "correctIndex": 2,
        "explanation": "O novo consumo é de 34 m³. O cálculo detalhado fica: Primeiros 10 m³ = R$ 5,50 (tarifa mínima). Próximos 10 m³ (faixa 11 a 20) = 10 x 0,85 = R$ 8,50. Próximos 10 m³ (faixa 21 a 30) = 10 x 2,13 = R$ 21,30. Restante de 4 m³ (faixa 31 a 50) = 4 x 2,13 = R$ 8,52. Somando tudo: 5,50 + 8,50 + 21,30 + 8,52 = R$ 43,82.",
        "contentHtml": "<strong>Questão 1 (ENEM ADAPTADA)</strong><br><br>\n                    No quadro a seguir, encontra-se a conta de água de uma mesma residência. Além do valor a pagar, a descrição mostra como calculá-lo, em função do consumo de água (em m³). Observe que, na conta de água, existe uma tarifa mínima e diferentes faixas de tarifação.<br><br>\n                    <div style=\"text-align: center; font-weight: bold; margin-bottom: 5px;\">Companhia de Saneamento</div>\n                    <div style=\"text-align: center; font-weight: bold; margin-bottom: 10px; font-size: 0.9rem;\">TARIFAS DE ÁGUA /m³</div>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 0.95rem;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px; text-align: left;\">Faixas de consumo</th>\n                                <th style=\"padding: 10px; text-align: center;\">Tarifa</th>\n                                <th style=\"padding: 10px; text-align: center;\">Consumo</th>\n                                <th style=\"padding: 10px; text-align: center;\">Valor -</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">até 10</td><td style=\"padding: 10px; text-align: center;\">5,50</td><td style=\"padding: 10px; text-align: center;\">tarifa mínima</td><td style=\"padding: 10px; text-align: center;\">5,50</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">11 a 20</td><td style=\"padding: 10px; text-align: center;\">0,85</td><td style=\"padding: 10px; text-align: center;\">7</td><td style=\"padding: 10px; text-align: center;\">5,95</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">21 a 30</td><td style=\"padding: 10px; text-align: center;\">2,13</td><td style=\"padding: 10px; text-align: center;\">-</td><td style=\"padding: 10px; text-align: center;\">-</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">31 a 50</td><td style=\"padding: 10px; text-align: center;\">2,13</td><td style=\"padding: 10px; text-align: center;\">-</td><td style=\"padding: 10px; text-align: center;\">-</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">acima de 50</td><td style=\"padding: 10px; text-align: center;\">2,36</td><td style=\"padding: 10px; text-align: center;\">-</td><td style=\"padding: 10px; text-align: center;\">-</td></tr>\n                        </tbody>\n                    </table>\n                    Supondo que o consumo d'água duplique, o novo valor da conta será de",
        "optionsHtml": [
          "R$ 22,90.",
          "R$ 106,46.",
          "R$ 43,82.",
          "R$ 17,40.",
          "R$ 22,52."
        ],
        "explanationHtml": "O novo consumo é de 34 m³. O cálculo detalhado fica: Primeiros 10 m³ = R$ 5,50 (tarifa mínima). Próximos 10 m³ (faixa 11 a 20) = 10 x 0,85 = R$ 8,50. Próximos 10 m³ (faixa 21 a 30) = 10 x 2,13 = R$ 21,30. Restante de 4 m³ (faixa 31 a 50) = 4 x 2,13 = R$ 8,52. Somando tudo: 5,50 + 8,50 + 21,30 + 8,52 = R$ 43,82."
      },
      {
        "id": "unit1_substituta_2",
        "text": "Questão 2 (ENEM) Imagine uma eleição envolvendo 3 candidatos, A, B, C e 33 eleitores (votantes). Cada eleitor vota fazendo uma ordenação dos três candidatos. Os resultados são os seguintes: ORDENAÇÃO Nº DE VOTANTES ABC 10 ACB 04 BAC 02 BCA 07 CAB 03 CBA 07 Total de Votantes 33 A primeira linha do quadro descreve que 10 eleitores escolheram A em 1º lugar, B em 2º lugar, C em 3º lugar e assim por diante. Considere o sistema de eleição no qual cada candidato ganha 3 pontos quando for escolhido em 1º lugar, 2 pontos quando for escolhido em 2º lugar e 1 ponto se for escolhido em 3º lugar. O candidato que acumular mais pontos é eleito. Neste caso,",
        "options": [
          "A é eleito com 66 pontos.",
          "A é eleito com 68 pontos.",
          "B é eleito com 68 pontos.",
          "B é eleito com 70 pontos.",
          "C é eleito com 68 pontos."
        ],
        "correctIndex": 1,
        "explanation": "Calculando a pontuação de A: 1º lugar: (10 + 4) x 3 = 42 pontos. 2º lugar: (2 + 3) x 2 = 10 pontos. 3º lugar: (7 + 7) x 1 = 14 pontos. Total de A = 42 + 10 + 14 = 68 pontos. Fazendo o mesmo para os outros, nota-se que A vence a disputa.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                    Imagine uma eleição envolvendo 3 candidatos, A, B, C e 33 eleitores (votantes). Cada eleitor vota fazendo uma ordenação dos três candidatos. Os resultados são os seguintes:<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px; text-align: left;\">ORDENAÇÃO</th>\n                                <th style=\"padding: 10px; text-align: center;\">Nº DE VOTANTES</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">ABC</td><td style=\"padding: 10px; text-align: center;\">10</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">ACB</td><td style=\"padding: 10px; text-align: center;\">04</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">BAC</td><td style=\"padding: 10px; text-align: center;\">02</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">BCA</td><td style=\"padding: 10px; text-align: center;\">07</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">CAB</td><td style=\"padding: 10px; text-align: center;\">03</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">CBA</td><td style=\"padding: 10px; text-align: center;\">07</td></tr>\n                            <tr style=\"background-color: #f8fafc; font-weight: bold;\"><td style=\"padding: 10px;\">Total de Votantes</td><td style=\"padding: 10px; text-align: center;\">33</td></tr>\n                        </tbody>\n                    </table>\n                    A primeira linha do quadro descreve que 10 eleitores escolheram A em 1º lugar, B em 2º lugar, C em 3º lugar e assim por diante. Considere o sistema de eleição no qual cada candidato ganha 3 pontos quando for escolhido em 1º lugar, 2 pontos quando for escolhido em 2º lugar e 1 ponto se for escolhido em 3º lugar. O candidato que acumular mais pontos é eleito.<br><br>\n                    Neste caso,",
        "optionsHtml": [
          "A é eleito com 66 pontos.",
          "A é eleito com 68 pontos.",
          "B é eleito com 68 pontos.",
          "B é eleito com 70 pontos.",
          "C é eleito com 68 pontos."
        ],
        "explanationHtml": "Calculando a pontuação de A: 1º lugar: (10 + 4) x 3 = 42 pontos. 2º lugar: (2 + 3) x 2 = 10 pontos. 3º lugar: (7 + 7) x 1 = 14 pontos. Total de A = 42 + 10 + 14 = 68 pontos. Fazendo o mesmo para os outros, nota-se que A vence a disputa."
      },
      {
        "id": "unit1_substituta_3",
        "text": "Questão 3 (ENEM) Na cidade de João e Maria, haverá shows em uma boate. Pensando em todos, a boate propôs pacotes para que os fregueses escolhessem o que seria melhor para si. Pacote 1: taxa de 40 reais por show. Pacote 2: taxa de 80 reais mais 10 reais por show. Pacote 3: taxa de 60 reais para 4 shows, e 15 reais por cada show a mais. João assistirá a 7 shows e Maria, a 4. As melhores opções para João e Maria são, respectivamente, os pacotes",
        "options": [
          "1 e 2.",
          "2 e 2.",
          "3 e 1.",
          "2 e 1.",
          "3 e 3."
        ],
        "correctIndex": 3,
        "explanation": "Análise das melhores opções: Para João (7 shows): P1 = 7x40 = R$280; P2 = 80 + 7x10 = R$150; P3 = 60 + 3x15 = R$105 (Melhor: Pacote 2 ou 3). Para Maria (4 shows): P1 = 4x40 = R$160; P2 = 80 + 4x10 = R$120; P3 = R$60 (Melhor: Pacote 1, pois ela quer apenas 4 shows fechados do P3). Cruzando as alternativas, a correta é 2 e 1.",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                    Na cidade de João e Maria, haverá shows em uma boate. Pensando em todos, a boate propôs pacotes para que os fregueses escolhessem o que seria melhor para si. Pacote 1: taxa de 40 reais por show. Pacote 2: taxa de 80 reais mais 10 reais por show. Pacote 3: taxa de 60 reais para 4 shows, e 15 reais por cada show a mais. João assistirá a 7 shows e Maria, a 4. As melhores opções para João e Maria são, respectivamente, os pacotes",
        "optionsHtml": [
          "1 e 2.",
          "2 e 2.",
          "3 e 1.",
          "2 e 1.",
          "3 e 3."
        ],
        "explanationHtml": "Análise das melhores opções: Para João (7 shows): P1 = 7x40 = R$280; P2 = 80 + 7x10 = R$150; P3 = 60 + 3x15 = R$105 (Melhor: Pacote 2 ou 3). Para Maria (4 shows): P1 = 4x40 = R$160; P2 = 80 + 4x10 = R$120; P3 = R$60 (Melhor: Pacote 1, pois ela quer apenas 4 shows fechados do P3). Cruzando as alternativas, a correta é 2 e 1."
      },
      {
        "id": "unit1_substituta_4",
        "text": "Questão 4 (INÉDITA) Lucas comprou, em uma loja de informática, 6 artigos: um laptop, no valor de R$ 1 800,00; uma impressora por R$ 960,00; e 4 cartuchos de tinta para impressora que custam R$ 75,00 a unidade. Se essas mercadorias foram pagas em 6 parcelas iguais, o valor de cada parcela, em reais, foi de",
        "options": [
          "R$ 3 060,00.",
          "R$ 1 530,00.",
          "R$ 1 020,00.",
          "R$ 510,00.",
          "R$ 320,00."
        ],
        "correctIndex": 3,
        "explanation": "Primeiro calcula-se o total da compra: 1800 + 960 + (4 x 75) = 1800 + 960 + 300 = R$ 3.060,00. Dividindo o valor total pelas 6 parcelas iguais: 3060 / 6 = R$ 510,00 por parcela.",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n                    Lucas comprou, em uma loja de informática, 6 artigos: um laptop, no valor de R$ 1 800,00; uma impressora por R$ 960,00; e 4 cartuchos de tinta para impressora que custam R$ 75,00 a unidade. Se essas mercadorias foram pagas em 6 parcelas iguais, o valor de cada parcela, em reais, foi de",
        "optionsHtml": [
          "R$ 3 060,00.",
          "R$ 1 530,00.",
          "R$ 1 020,00.",
          "R$ 510,00.",
          "R$ 320,00."
        ],
        "explanationHtml": "Primeiro calcula-se o total da compra: 1800 + 960 + (4 x 75) = 1800 + 960 + 300 = R$ 3.060,00. Dividindo o valor total pelas 6 parcelas iguais: 3060 / 6 = R$ 510,00 por parcela."
      },
      {
        "id": "unit1_substituta_5",
        "text": "Questão 5 (ENEM ADAPTADA) Em um aeroporto, os passageiros devem submeter suas bagagens a uma das cinco máquinas de raio-X disponíveis ao adentrarem a sala de embarque. Num dado instante, o tempo gasto por essas máquinas para escanear a bagagem de cada passageiro e o número de pessoas presentes em cada fila estão apresentados em um painel, como mostrado nas figuras abaixo. Máquina 1 Máquina 2 Máquina 3 Máquina 4 Máquina 5 35 segundos 5 pessoas 25 segundos 6 pessoas 22 segundos 7 pessoas 40 segundos 4 pessoas 20 segundos 8 pessoas Um passageiro, ao chegar à sala de embarque desse aeroporto no instante indicado, visando esperar o menor tempo possível, deverá se dirigir à máquina",
        "options": [
          "1.",
          "2.",
          "3.",
          "4.",
          "5."
        ],
        "correctIndex": 1,
        "explanation": "Multiplicando o tempo pelo número de pessoas para obter a espera total de cada fila: M1 = 35x5 = 175s; M2 = 25x6 = 150s; M3 = 22x7 = 154s; M4 = 40x4 = 160s; M5 = 20x8 = 160s. O menor tempo de espera é na Máquina 2.",
        "contentHtml": "<strong>Questão 5 (ENEM ADAPTADA)</strong><br><br>\n                    Em um aeroporto, os passageiros devem submeter suas bagagens a uma das cinco máquinas de raio-X disponíveis ao adentrarem a sala de embarque. Num dado instante, o tempo gasto por essas máquinas para escanear a bagagem de cada passageiro e o número de pessoas presentes em cada fila estão apresentados em um painel, como mostrado nas figuras abaixo.<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.9rem; text-align: center;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 8px;\">Máquina 1</th>\n                                <th style=\"padding: 8px;\">Máquina 2</th>\n                                <th style=\"padding: 8px;\">Máquina 3</th>\n                                <th style=\"padding: 8px;\">Máquina 4</th>\n                                <th style=\"padding: 8px;\">Máquina 5</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style=\"padding: 10px; border: 1px solid #e2e8f0; background: #fff;\">35 segundos<br><span style=\"color:#718096; font-size:0.8rem;\">5 pessoas</span></td>\n                                <td style=\"padding: 10px; border: 1px solid #e2e8f0; background: #fff;\">25 segundos<br><span style=\"color:#718096; font-size:0.8rem;\">6 pessoas</span></td>\n                                <td style=\"padding: 10px; border: 1px solid #e2e8f0; background: #fff;\">22 segundos<br><span style=\"color:#718096; font-size:0.8rem;\">7 pessoas</span></td>\n                                <td style=\"padding: 10px; border: 1px solid #e2e8f0; background: #fff;\">40 segundos<br><span style=\"color:#718096; font-size:0.8rem;\">4 pessoas</span></td>\n                                <td style=\"padding: 10px; border: 1px solid #e2e8f0; background: #fff;\">20 segundos<br><span style=\"color:#718096; font-size:0.8rem;\">8 pessoas</span></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    Um passageiro, ao chegar à sala de embarque desse aeroporto no instante indicado, visando esperar o menor tempo possível, deverá se dirigir à máquina",
        "optionsHtml": [
          "1.",
          "2.",
          "3.",
          "4.",
          "5."
        ],
        "explanationHtml": "Multiplicando o tempo pelo número de pessoas para obter a espera total de cada fila: M1 = 35x5 = 175s; M2 = 25x6 = 150s; M3 = 22x7 = 154s; M4 = 40x4 = 160s; M5 = 20x8 = 160s. O menor tempo de espera é na Máquina 2."
      },
      {
        "id": "unit1_substituta_6",
        "text": "Questão 6 (INÉDITA) Certa vez, um amigo me ligou para resolver um problema do seu cotidiano. Ele é proprietário de uma agência de turismo, chamada Alex Carioca Turismo. Em um determinado dia, ele estava com um grupo de 846 pessoas que iriam fazer um retiro religioso, e sua empresa dispõe de ônibus com capacidade máxima de 45 pessoas e vans com capacidade para 20 pessoas. A tabela abaixo mostra os preços cobrados pela empresa de turismo para o aluguel de ônibus e vans. Transporte (IDA E VOLTA) Preço ônibus R$ 600,00 van R$ 280,00 A quantidade mínima de ônibus e vans que esse grupo deve alugar para fazer essa viagem, de modo que todos se acomodem sentados e que tenham o menor custo possível para eles, é",
        "options": [
          "18 ônibus.",
          "19 ônibus.",
          "18 ônibus e 1 van.",
          "18 ônibus e 2 vans.",
          "43 vans."
        ],
        "correctIndex": 3,
        "explanation": "O custo por pessoa no ônibus cheio é R$600/45 ≈ R$13,33, e na van é R$280/20 = R$14,00. Logo, compensa usar o máximo de ônibus possível. 846 / 45 = 18 ônibus com resto de 36 pessoas. Para levar as 36 pessoas restantes: alugar mais 1 ônibus custa R$600. Alugar 2 vans (capacidade 40) custa 2 x R$280 = R$560. Como R$560 é mais barato que R$600, a combinação ideal é 18 ônibus e 2 vans.",
        "contentHtml": "<strong>Questão 6 (INÉDITA)</strong><br><br>\n                    Certa vez, um amigo me ligou para resolver um problema do seu cotidiano. Ele é proprietário de uma agência de turismo, chamada Alex Carioca Turismo.<br>\n                    Em um determinado dia, ele estava com um grupo de 846 pessoas que iriam fazer um retiro religioso, e sua empresa dispõe de ônibus com capacidade máxima de 45 pessoas e vans com capacidade para 20 pessoas. A tabela abaixo mostra os preços cobrados pela empresa de turismo para o aluguel de ônibus e vans.<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px; text-align: left;\">Transporte (IDA E VOLTA)</th>\n                                <th style=\"padding: 10px; text-align: center;\">Preço</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">ônibus</td><td style=\"padding: 10px; text-align: center;\">R$ 600,00</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">van</td><td style=\"padding: 10px; text-align: center;\">R$ 280,00</td></tr>\n                        </tbody>\n                    </table>\n                    A quantidade mínima de ônibus e vans que esse grupo deve alugar para fazer essa viagem, de modo que todos se acomodem sentados e que tenham o menor custo possível para eles, é",
        "optionsHtml": [
          "18 ônibus.",
          "19 ônibus.",
          "18 ônibus e 1 van.",
          "18 ônibus e 2 vans.",
          "43 vans."
        ],
        "explanationHtml": "O custo por pessoa no ônibus cheio é R$600/45 ≈ R$13,33, e na van é R$280/20 = R$14,00. Logo, compensa usar o máximo de ônibus possível. 846 / 45 = 18 ônibus com resto de 36 pessoas. Para levar as 36 pessoas restantes: alugar mais 1 ônibus custa R$600. Alugar 2 vans (capacidade 40) custa 2 x R$280 = R$560. Como R$560 é mais barato que R$600, a combinação ideal é 18 ônibus e 2 vans."
      },
      {
        "id": "unit1_substituta_7",
        "text": "Questão 7 (PUC-PR) Um estagiário recebeu a tarefa de organizar documentos em três arquivos. No primeiro arquivo, havia apenas 42 contratos de locação, no segundo arquivo, apenas 30 contratos de compra e venda, no terceiro arquivo, apenas 18 laudos de avaliação de imóveis. Ele foi orientado a colocar os documentos em pastas, de modo que todas as pastas devem conter a mesma quantidade de documentos. Além de não poder mudar algum documento do seu arquivo original, deveria colocar na menor quantidade possível de pastas. O número mínimo de pastas que ele pode usar é?",
        "options": [
          "13.",
          "15.",
          "26.",
          "28.",
          "30."
        ],
        "correctIndex": 1,
        "explanation": "Para usar o menor número de pastas, cada pasta deve conter o maior número de documentos possível. Calculamos o MDC(42, 30, 18) = 6 documentos por pasta. O total de pastas será: (42/6) + (30/6) + (18/6) = 7 + 5 + 3 = 15 pastas.",
        "contentHtml": "<strong>Questão 7 (PUC-PR)</strong><br><br>\n                    Um estagiário recebeu a tarefa de organizar documentos em três arquivos. No primeiro arquivo, havia apenas 42 contratos de locação, no segundo arquivo, apenas 30 contratos de compra e venda, no terceiro arquivo, apenas 18 laudos de avaliação de imóveis. Ele foi orientado a colocar os documentos em pastas, de modo que todas as pastas devem conter a mesma quantidade de documentos. Além de não poder mudar algum documento do seu arquivo original, deveria colocar na menor quantidade possível de pastas. O número mínimo de pastas que ele pode usar é?",
        "optionsHtml": [
          "13.",
          "15.",
          "26.",
          "28.",
          "30."
        ],
        "explanationHtml": "Para usar o menor número de pastas, cada pasta deve conter o maior número de documentos possível. Calculamos o MDC(42, 30, 18) = 6 documentos por pasta. O total de pastas será: (42/6) + (30/6) + (18/6) = 7 + 5 + 3 = 15 pastas."
      },
      {
        "id": "unit1_substituta_8",
        "text": "Questão 8 (ENEM ADAPTADA) No tanque de um certo carro de passeio, cabem até 50 L de combustível, e o rendimento médio desse carro na estrada é de 15 km/L. Ao sair para uma viagem de 600 km, o motorista observou que o marcador de combustível estava exatamente sobre uma das marcas da escala divisória do medidor, conforme figura a seguir. Como o motorista conhece o percurso, sabe que existem, até a chegada a seu destino, cinco postos de abastecimento de combustível, localizados a 150 km, 187 km, 450 km, 500 km e 570 km do ponto de partida. Qual a máxima distância, em quilômetros, que poderá percorrer até ser necessário reabastecer o veículo, de modo a não ficar sem combustível na estrada?",
        "options": [
          "570.",
          "500.",
          "450.",
          "187.",
          "150."
        ],
        "correctIndex": 2,
        "explanation": "O ponteiro aponta para a marca correspondente a 3/4 do tanque. Calculando o volume disponível: 3/4 * 50 = 37,5 litros. Multiplicando pelo rendimento do automóvel: 37,5 L * 15 km/L = 562,5 km de autonomia máxima. O posto mais distante que ele consegue alcançar com segurança antes de secar o tanque (limite de 562,5 km) fica situado a 450 km.",
        "contentHtml": "<strong>Questão 8 (ENEM ADAPTADA)</strong><br><br>\n                    No tanque de um certo carro de passeio, cabem até 50 L de combustível, e o rendimento médio desse carro na estrada é de 15 km/L. Ao sair para uma viagem de 600 km, o motorista observou que o marcador de combustível estava exatamente sobre uma das marcas da escala divisória do medidor, conforme figura a seguir.<br>\n                    <img src=\"/imagens/marcador.jpeg\" alt=\"Marcador de Combustível indicando 3/4\" class=\"img-center\"><br>\n                    Como o motorista conhece o percurso, sabe que existem, até a chegada a seu destino, cinco postos de abastecimento de combustível, localizados a 150 km, 187 km, 450 km, 500 km e 570 km do ponto de partida. Qual a máxima distância, em quilômetros, que poderá percorrer até ser necessário reabastecer o veículo, de modo a não ficar sem combustível na estrada?",
        "optionsHtml": [
          "570.",
          "500.",
          "450.",
          "187.",
          "150."
        ],
        "explanationHtml": "O ponteiro aponta para a marca correspondente a 3/4 do tanque. Calculando o volume disponível: 3/4 * 50 = 37,5 litros. Multiplicando pelo rendimento do automóvel: 37,5 L * 15 km/L = 562,5 km de autonomia máxima. O posto mais distante que ele consegue alcançar com segurança antes de secar o tanque (limite de 562,5 km) fica situado a 450 km."
      },
      {
        "id": "unit1_substituta_9",
        "text": "Questão 9 (ENEM) Cinco marcas de pão integral apresentam as seguintes concentrações de fibras (massa de fibra por massa de pão): Marca A: 2 g de fibras a cada 50 g de pão; Marca B: 5 g de fibras a cada 40 g de pão; Marca C: 5 g de fibras a cada 100 g de pão; Marca D: 6 g de fibras a cada 90 g de pão; Marca E: 7 g de fibras a cada 70 g de pão. Recomenda-se a ingestão do pão que possui a maior concentração de fibras. Disponível em: www.blog.saude.gov.br. Acesso em: 25 fev. 2013. A marca a ser escolhida é",
        "options": [
          "A.",
          "B.",
          "C.",
          "D.",
          "E."
        ],
        "correctIndex": 1,
        "explanation": "Análise da concentração de cada marca (razão fibra/pão): A = 2/50 = 0,04; B = 5/40 = 0,125; C = 5/100 = 0,05; D = 6/90 = 0,066...; E = 7/70 = 0,10. A maior concentração está presente na Marca B (0,125).",
        "contentHtml": "<strong>Questão 9 (ENEM)</strong><br><br>\n                    Cinco marcas de pão integral apresentam as seguintes concentrações de fibras (massa de fibra por massa de pão):<br>\n                    <ul>\n                        <li>Marca A: 2 g de fibras a cada 50 g de pão;</li>\n                        <li>Marca B: 5 g de fibras a cada 40 g de pão;</li>\n                        <li>Marca C: 5 g de fibras a cada 100 g de pão;</li>\n                        <li>Marca D: 6 g de fibras a cada 90 g de pão;</li>\n                        <li>Marca E: 7 g de fibras a cada 70 g de pão.</li>\n                    </ul><br>\n                    Recomenda-se a ingestão do pão que possui a maior concentração de fibras.<br>\n                    <div style=\"font-size: 0.8rem; color: #718096; text-align: right; margin-bottom: 15px;\">Disponível em: www.blog.saude.gov.br. Acesso em: 25 fev. 2013.</div>\n                    A marca a ser escolhida é",
        "optionsHtml": [
          "A.",
          "B.",
          "C.",
          "D.",
          "E."
        ],
        "explanationHtml": "Análise da concentração de cada marca (razão fibra/pão): A = 2/50 = 0,04; B = 5/40 = 0,125; C = 5/100 = 0,05; D = 6/90 = 0,066...; E = 7/70 = 0,10. A maior concentração está presente na Marca B (0,125)."
      },
      {
        "id": "unit1_substituta_10",
        "text": "Questão 10 (INÉDITA) A comissão de formatura das turmas de 3º ano do Ensino Médio de certa escola fez uma pesquisa entre os alunos para saber que tipo de festa eles preferiam. 1 3 dos alunos prefere uma formatura tradicional, com uma cerimônia e um baile, 1 8 quer um churrasco numa casa de praia, 2 5 gostaria de fazer uma viagem internacional e 17 alunos não quiseram responder à pesquisa. Sabendo que todos os alunos do 3º ano da escola foram abordados, o número total de alunos do 3º ano é",
        "options": [
          "90 alunos.",
          "100 alunos.",
          "110 alunos.",
          "120 alunos.",
          "130 alunos."
        ],
        "correctIndex": 3,
        "explanation": "Somando as frações dos alunos que opinaram: 1/3 + 1/8 + 2/5. O MMC entre 3, 8 e 5 é 120. Convertendo as frações: 40/120 + 15/120 + 48/120 = 103/120. A fração que não opinou corresponde a 120/120 - 103/120 = 17/120. Se 17/120 equivale a 17 alunos, então o grupo inteiro possui um total de 120 alunos.",
        "contentHtml": "<strong>Questão 10 (INÉDITA)</strong><br><br>\n                    A comissão de formatura das turmas de 3º ano do Ensino Médio de certa escola fez uma pesquisa entre os alunos para saber que tipo de festa eles preferiam. <div class=\"frac\"><span class=\"nominator\">1</span><span>3</span></div> dos alunos prefere uma formatura tradicional, com uma cerimônia e um baile, <div class=\"frac\"><span class=\"nominator\">1</span><span>8</span></div> quer um churrasco numa casa de praia, <div class=\"frac\"><span class=\"nominator\">2</span><span>5</span></div> gostaria de fazer uma viagem internacional e 17 alunos não quiseram responder à pesquisa. Sabendo que todos os alunos do 3º ano da escola foram abordados, o número total de alunos do 3º ano é",
        "optionsHtml": [
          "90 alunos.",
          "100 alunos.",
          "110 alunos.",
          "120 alunos.",
          "130 alunos."
        ],
        "explanationHtml": "Somando as frações dos alunos que opinaram: 1/3 + 1/8 + 2/5. O MMC entre 3, 8 e 5 é 120. Convertendo as frações: 40/120 + 15/120 + 48/120 = 103/120. A fração que não opinou corresponde a 120/120 - 103/120 = 17/120. Se 17/120 equivale a 17 alunos, então o grupo inteiro possui um total de 120 alunos."
      }
    ],
    "simulado1": [
      {
        "id": "unit1_simulado1_1",
        "text": "Questão 1 (ENEM/PPL ADAPTADA) O Ministério da Saúde acompanha com preocupação a difusão da tuberculose no Brasil. Um sistema de vigilância baseia-se no acompanhamento sistemático das taxas de incidência dessa doença nos estados. Depois de credenciar alguns estados a receberem recursos, em 2006, passou a ser de grande importância definir prioridades para a alocação de recursos de combate e de prevenção, levando em consideração as taxas de incidência nos anos de 2000 e 2004, conforme o quadro seguinte. ESTADO TAXA DE INCIDÊNCIA 2000 TAXA DE INCIDÊNCIA 2004 Amapá 9,0 37,1 Amazonas 72,8 69,0 Goiás 20,5 16,7 Minas Gerais 0,3 27,2 Pernambuco 43,3 51,0 Rio de Janeiro 90,7 79,7 São Paulo 45,8 38,2 Disponível em: SINAM, 2006; IBGE, Censo 2000. Se a prioridade na distribuição de recursos for dada ao estado que tiver maior aumento absoluto em suas taxas de incidência, ela será dada para",
        "options": [
          "Amapá.",
          "Amazonas.",
          "Minas Gerais.",
          "Pernambuco.",
          "Rio de Janeiro."
        ],
        "correctIndex": 0,
        "explanation": "Calculando a variação absoluta (subtração direta): Amapá aumentou 28,1 (37,1 - 9,0); Minas Gerais aumentou 26,9 (27,2 - 0,3); Pernambuco aumentou 7,7. O maior aumento absoluto foi o do Amapá.",
        "contentHtml": "<strong>Questão 1 (ENEM/PPL ADAPTADA)</strong><br><br>\n                    O Ministério da Saúde acompanha com preocupação a difusão da tuberculose no Brasil. Um sistema de vigilância baseia-se no acompanhamento sistemático das taxas de incidência dessa doença nos estados. Depois de credenciar alguns estados a receberem recursos, em 2006, passou a ser de grande importância definir prioridades para a alocação de recursos de combate e de prevenção, levando em consideração as taxas de incidência nos anos de 2000 e 2004, conforme o quadro seguinte.<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px; text-align: left;\">ESTADO</th>\n                                <th style=\"padding: 10px; text-align: center;\">TAXA DE INCIDÊNCIA 2000</th>\n                                <th style=\"padding: 10px; text-align: center;\">TAXA DE INCIDÊNCIA 2004</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Amapá</td><td style=\"padding: 10px; text-align: center;\">9,0</td><td style=\"padding: 10px; text-align: center;\">37,1</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Amazonas</td><td style=\"padding: 10px; text-align: center;\">72,8</td><td style=\"padding: 10px; text-align: center;\">69,0</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Goiás</td><td style=\"padding: 10px; text-align: center;\">20,5</td><td style=\"padding: 10px; text-align: center;\">16,7</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Minas Gerais</td><td style=\"padding: 10px; text-align: center;\">0,3</td><td style=\"padding: 10px; text-align: center;\">27,2</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Pernambuco</td><td style=\"padding: 10px; text-align: center;\">43,3</td><td style=\"padding: 10px; text-align: center;\">51,0</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Rio de Janeiro</td><td style=\"padding: 10px; text-align: center;\">90,7</td><td style=\"padding: 10px; text-align: center;\">79,7</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">São Paulo</td><td style=\"padding: 10px; text-align: center;\">45,8</td><td style=\"padding: 10px; text-align: center;\">38,2</td></tr>\n                        </tbody>\n                    </table>\n                    <div style=\"font-size: 0.8rem; color: #718096; text-align: right; margin-bottom: 15px;\">Disponível em: SINAM, 2006; IBGE, Censo 2000.</div>\n                    Se a prioridade na distribuição de recursos for dada ao estado que tiver maior aumento absoluto em suas taxas de incidência, ela será dada para",
        "optionsHtml": [
          "Amapá.",
          "Amazonas.",
          "Minas Gerais.",
          "Pernambuco.",
          "Rio de Janeiro."
        ],
        "explanationHtml": "Calculando a variação absoluta (subtração direta): Amapá aumentou 28,1 (37,1 - 9,0); Minas Gerais aumentou 26,9 (27,2 - 0,3); Pernambuco aumentou 7,7. O maior aumento absoluto foi o do Amapá."
      },
      {
        "id": "unit1_simulado1_2",
        "text": "Questão 2 (ENEM) Na cidade de João e Maria, haverá shows em uma boate. Pensando em todos, a boate propôs pacotes para que os fregueses escolhessem o que seria melhor para si. Pacote 1: taxa de 40 reais por show. Pacote 2: taxa de 80 reais mais 10 reais por show. Pacote 3: taxa de 60 reais para 4 shows, e 15 reais por cada show a mais. João assistirá a 7 shows e Maria, a 4. As melhores opções para João e Maria são, respectivamente, os pacotes",
        "options": [
          "1 e 2.",
          "2 e 2.",
          "3 e 1.",
          "2 e 1.",
          "3 e 3."
        ],
        "correctIndex": 4,
        "explanation": "Para João (7 shows): Pacote 1 = 7 × 40 = R$ 280,00; Pacote 2 = 80 + (7 × 10) = R$ 150,00; Pacote 3 = 60 + (3 × 15) = R$ 105,00. Melhor opção: Pacote 3. Para Maria (4 shows): Pacote 1 = 4 × 40 = R$ 160,00; Pacote 2 = 80 + (4 × 10) = R$ 120,00; Pacote 3 = R$ 60,00. Melhor opção: Pacote 3. Portanto, a resposta correta é 3 e 3.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                    Na cidade de João e Maria, haverá shows em uma boate. Pensando em todos, a boate propôs pacotes para que os fregueses escolhessem o que seria melhor para si. Pacote 1: taxa de 40 reais por show. Pacote 2: taxa de 80 reais mais 10 reais por show. Pacote 3: taxa de 60 reais para 4 shows, e 15 reais por cada show a mais. João assistirá a 7 shows e Maria, a 4. As melhores opções para João e Maria são, respectivamente, os pacotes",
        "optionsHtml": [
          "1 e 2.",
          "2 e 2.",
          "3 e 1.",
          "2 e 1.",
          "3 e 3."
        ],
        "explanationHtml": "Para João (7 shows): Pacote 1 = 7 × 40 = R$ 280,00; Pacote 2 = 80 + (7 × 10) = R$ 150,00; Pacote 3 = 60 + (3 × 15) = R$ 105,00. Melhor opção: Pacote 3. Para Maria (4 shows): Pacote 1 = 4 × 40 = R$ 160,00; Pacote 2 = 80 + (4 × 10) = R$ 120,00; Pacote 3 = R$ 60,00. Melhor opção: Pacote 3. Portanto, a resposta correta é 3 e 3."
      },
      {
        "id": "unit1_simulado1_3",
        "text": "Questão 3 (INÉDITA) Estamos vivendo em um período em que a água está ficando escassa no planeta. De acordo com a Organização das Nações Unidas (ONU), cada pessoa deve consumir, diariamente, 50 litros de água para suprir suas necessidades diárias. Nesse sentido, João consome, em média, por dia, 57 litros de água. Mensalmente, ele ultrapassa a orientação da ONU em",
        "options": [
          "7 litros.",
          "107 litros.",
          "210 litros.",
          "1 500 litros.",
          "1 710 litros."
        ],
        "correctIndex": 2,
        "explanation": "João consome 7 litros a mais por dia do que o recomendado (57 - 50 = 7). Considerando um mês comercial padrão de 30 dias: 7 litros/dia x 30 dias = 210 litros no mês.",
        "contentHtml": "<strong>Questão 3 (INÉDITA)</strong><br><br>\n                    Estamos vivendo em um período em que a água está ficando escassa no planeta. De acordo com a Organização das Nações Unidas (ONU), cada pessoa deve consumir, diariamente, 50 litros de água para suprir suas necessidades diárias. Nesse sentido, João consome, em média, por dia, 57 litros de água. Mensalmente, ele ultrapassa a orientação da ONU em",
        "optionsHtml": [
          "7 litros.",
          "107 litros.",
          "210 litros.",
          "1 500 litros.",
          "1 710 litros."
        ],
        "explanationHtml": "João consome 7 litros a mais por dia do que o recomendado (57 - 50 = 7). Considerando um mês comercial padrão de 30 dias: 7 litros/dia x 30 dias = 210 litros no mês."
      },
      {
        "id": "unit1_simulado1_4",
        "text": "Questão 4 (INÉDITA) Lucas comprou, em uma loja de informática, 6 artigos: um laptop, no valor de R$ 1 800,00; uma impressora por R$ 960,00; e 4 cartuchos de tinta para impressora que custam R$ 75,00 a unidade. Se essas mercadorias foram pagas em 6 parcelas iguais, o valor de cada parcela, em reais, foi de",
        "options": [
          "R$ 3 060,00.",
          "R$ 1 530,00.",
          "R$ 1 020,00.",
          "R$ 510,00.",
          "R$ 320,00."
        ],
        "correctIndex": 3,
        "explanation": "Primeiro calcula-se o total da compra: 1800 + 960 + (4 x 75) = 1800 + 960 + 300 = R$ 3.060,00. Dividindo o valor total pelas 6 parcelas iguais: 3060 / 6 = R$ 510,00 por parcela.",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n                    Lucas comprou, em uma loja de informática, 6 artigos: um laptop, no valor de R$ 1 800,00; uma impressora por R$ 960,00; e 4 cartuchos de tinta para impressora que custam R$ 75,00 a unidade. Se essas mercadorias foram pagas em 6 parcelas iguais, o valor de cada parcela, em reais, foi de",
        "optionsHtml": [
          "R$ 3 060,00.",
          "R$ 1 530,00.",
          "R$ 1 020,00.",
          "R$ 510,00.",
          "R$ 320,00."
        ],
        "explanationHtml": "Primeiro calcula-se o total da compra: 1800 + 960 + (4 x 75) = 1800 + 960 + 300 = R$ 3.060,00. Dividindo o valor total pelas 6 parcelas iguais: 3060 / 6 = R$ 510,00 por parcela."
      },
      {
        "id": "unit1_simulado1_5",
        "text": "Questão 5 (ENEM/PPL) Uma loja decide premiar seus clientes. Cada cliente receberá um dos seis possíveis brindes disponíveis, conforme sua ordem de chegada na loja. Os brindes a serem distribuídos são: uma bola, um chaveiro, uma caneta, um refrigerante, um sorvete e um CD, nessa ordem. O primeiro cliente da loja recebe uma bola, o segundo recebe um chaveiro, o terceiro recebe uma caneta, o quarto recebe um refrigerante, o quinto recebe um sorvete, o sexto recebe um CD, o sétimo recebe uma bola, o oitavo recebe um chaveiro, e assim sucessivamente, segundo a ordem dos brindes. O milésimo cliente receberá de brinde um(a):",
        "options": [
          "Bola.",
          "Caneta.",
          "Refrigerante.",
          "Sorvete.",
          "CD."
        ],
        "correctIndex": 2,
        "explanation": "Como são 6 brindes que se repetem ciclicamente, dividimos 1000 por 6. O quociente é 166 (voltas completas no ciclo) e o resto é 4. O quarto brinde da sequência é o refrigerante (1º bola, 2º chaveiro, 3º caneta, 4º refrigerante).",
        "contentHtml": "<strong>Questão 5 (ENEM/PPL)</strong><br><br>\n                    Uma loja decide premiar seus clientes. Cada cliente receberá um dos seis possíveis brindes disponíveis, conforme sua ordem de chegada na loja. Os brindes a serem distribuídos são: uma bola, um chaveiro, uma caneta, um refrigerante, um sorvete e um CD, nessa ordem. O primeiro cliente da loja recebe uma bola, o segundo recebe um chaveiro, o terceiro recebe uma caneta, o quarto recebe um refrigerante, o quinto recebe um sorvete, o sexto recebe um CD, o sétimo recebe uma bola, o oitavo recebe um chaveiro, e assim sucessivamente, segundo a ordem dos brindes.<br><br>\n                    O milésimo cliente receberá de brinde um(a):",
        "optionsHtml": [
          "Bola.",
          "Caneta.",
          "Refrigerante.",
          "Sorvete.",
          "CD."
        ],
        "explanationHtml": "Como são 6 brindes que se repetem ciclicamente, dividimos 1000 por 6. O quociente é 166 (voltas completas no ciclo) e o resto é 4. O quarto brinde da sequência é o refrigerante (1º bola, 2º chaveiro, 3º caneta, 4º refrigerante)."
      },
      {
        "id": "unit1_simulado1_6",
        "text": "Questão 6 (ENEM) O gerente de um cinema fornece anualmente ingressos gratuitos para escolas. Este ano, serão distribuídos 400 ingressos para uma sessão vespertina e 320 ingressos para uma sessão noturna de um mesmo filme. Várias escolas podem ser escolhidas para receberem ingressos. Há alguns critérios para a distribuição dos ingressos: cada escola deverá receber ingressos para uma única sessão; todas as escolas contempladas deverão receber o mesmo número de ingressos; não haverá sobra de ingressos (ou seja, todos os ingressos serão distribuídos). O número mínimo de escolas que podem ser escolhidas para obter ingressos, segundo os critérios estabelecidos, é",
        "options": [
          "2.",
          "4.",
          "9.",
          "40.",
          "80."
        ],
        "correctIndex": 2,
        "explanation": "Para minimizar o número de escolas, devemos maximizar o número de ingressos por escola usando o MDC(400, 320) = 80. O número total de escolas será (400 / 80) + (320 / 80) = 5 + 4 = 9 escolas.",
        "contentHtml": "<strong>Questão 6 (ENEM)</strong><br><br>\n                    O gerente de um cinema fornece anualmente ingressos gratuitos para escolas. Este ano, serão distribuídos 400 ingressos para uma sessão vespertina e 320 ingressos para uma sessão noturna de um mesmo filme. Várias escolas podem ser escolhidas para receberem ingressos. Há alguns critérios para a distribuição dos ingressos:<br><br>\n                    <ul>\n                        <li>cada escola deverá receber ingressos para uma única sessão;</li>\n                        <li>todas as escolas contempladas deverão receber o mesmo número de ingressos;</li>\n                        <li>não haverá sobra de ingressos (ou seja, todos os ingressos serão distribuídos).</li>\n                    </ul><br>\n                    O número mínimo de escolas que podem ser escolhidas para obter ingressos, segundo os critérios estabelecidos, é",
        "optionsHtml": [
          "2.",
          "4.",
          "9.",
          "40.",
          "80."
        ],
        "explanationHtml": "Para minimizar o número de escolas, devemos maximizar o número de ingressos por escola usando o MDC(400, 320) = 80. O número total de escolas será (400 / 80) + (320 / 80) = 5 + 4 = 9 escolas."
      },
      {
        "id": "unit1_simulado1_7",
        "text": "Questão 7 (UFSM ADAPTADA) Estudos e simulações são necessários para melhorar o trânsito. Por exemplo: imagine que, de um terminal rodoviário, partam os ônibus de três empresas, A, B e C. Os ônibus da empresa A partem a cada 15 minutos; da empresa B, a cada 20 minutos; da empresa C, a cada 25 minutos. Às 7 h, partem simultaneamente 3 ônibus, um de cada empresa. A próxima partida simultânea dos ônibus das 3 empresas será às",
        "options": [
          "9 h.",
          "9 h 50min.",
          "10 h 30min.",
          "11 h.",
          "12 h."
        ],
        "correctIndex": 4,
        "explanation": "Devemos calcular o MMC de 15, 20 e 25 para descobrir após quantos minutos eles partirão juntos novamente. MMC(15, 20, 25) = 300 minutos. Convertendo para horas: 300 / 60 = 5 horas. Partindo das 7 h, a próxima partida será às 7 + 5 = 12 h.",
        "contentHtml": "<strong>Questão 7 (UFSM ADAPTADA)</strong><br><br>\n                    Estudos e simulações são necessários para melhorar o trânsito. Por exemplo: imagine que, de um terminal rodoviário, partam os ônibus de três empresas, A, B e C. Os ônibus da empresa A partem a cada 15 minutos; da empresa B, a cada 20 minutos; da empresa C, a cada 25 minutos.<br><br>\n                    Às 7 h, partem simultaneamente 3 ônibus, um de cada empresa. A próxima partida simultânea dos ônibus das 3 empresas será às",
        "optionsHtml": [
          "9 h.",
          "9 h 50min.",
          "10 h 30min.",
          "11 h.",
          "12 h."
        ],
        "explanationHtml": "Devemos calcular o MMC de 15, 20 e 25 para descobrir após quantos minutos eles partirão juntos novamente. MMC(15, 20, 25) = 300 minutos. Convertendo para horas: 300 / 60 = 5 horas. Partindo das 7 h, a próxima partida será às 7 + 5 = 12 h."
      },
      {
        "id": "unit1_simulado1_8",
        "text": "Questão 8 (UFRJ ADAPTADA) Numa escola foi feito um levantamento para saber quais os tipos de calçados mais usados pelas crianças. Foi obtido o seguinte resultado: um terço usa sandálias; um quarto usa tênis; um quinto usa sapatos, e os 52 restantes usam outros tipos de calçados. Conclui-se que, pelos tipos de calçados encontrados, há nessa escola um total de",
        "options": [
          "280 crianças.",
          "270 crianças.",
          "260 crianças.",
          "250 crianças.",
          "240 crianças."
        ],
        "correctIndex": 4,
        "explanation": "Somando as frações conhecidas: 1/3 + 1/4 + 1/5 = 20/60 + 15/60 + 12/60 = 47/60. A fração restante para completar o todo é de 13/60, que corresponde às 52 crianças restantes. Se 13/60 = 52, então 1/60 = 4. Portanto, o total é 60 * 4 = 240 crianças.",
        "contentHtml": "<strong>Questão 8 (UFRJ ADAPTADA)</strong><br><br>\n                    Numa escola foi feito um levantamento para saber quais os tipos de calçados mais usados pelas crianças. Foi obtido o seguinte resultado: um terço usa sandálias; um quarto usa tênis; um quinto usa sapatos, e os 52 restantes usam outros tipos de calçados. Conclui-se que, pelos tipos de calçados encontrados, há nessa escola um total de",
        "optionsHtml": [
          "280 crianças.",
          "270 crianças.",
          "260 crianças.",
          "250 crianças.",
          "240 crianças."
        ],
        "explanationHtml": "Somando as frações conhecidas: 1/3 + 1/4 + 1/5 = 20/60 + 15/60 + 12/60 = 47/60. A fração restante para completar o todo é de 13/60, que corresponde às 52 crianças restantes. Se 13/60 = 52, então 1/60 = 4. Portanto, o total é 60 * 4 = 240 crianças."
      }
    ],
    "simulado2": [
      {
        "id": "unit1_simulado2_1",
        "text": "Questão 1 (ENEM/PPL ADAPTADA) Camile gosta de caminhar em uma calçada em torno de uma praça circular que possui 500 metros de extensão, localizada perto de casa. A praça, bem como alguns locais ao seu redor e o ponto de onde inicia a caminhada, estão representados na figura: Em uma tarde, Camile caminhou 4 125 metros, no sentido anti-horário, e parou. Qual dos locais indicados na figura é o mais próximo de sua parada?",
        "options": [
          "Centro cultural.",
          "Drogaria.",
          "Lan house.",
          "Ponto de partida.",
          "Padaria."
        ],
        "correctIndex": 4,
        "explanation": "Dividindo a distância total pela extensão da pista: 4125 / 500 = 8 voltas completas e sobra um resto de 125 metros. Como a pista tem 500m, 125m equivale exatamente a 1/4 de volta (ou 2/8). Caminhando no sentido anti-horário, 1/4 de volta a deixa exatamente em frente à Padaria.",
        "contentHtml": "<strong>Questão 1 (ENEM/PPL ADAPTADA)</strong><br><br>\n                    Camile gosta de caminhar em uma calçada em torno de uma praça circular que possui 500 metros de extensão, localizada perto de casa. A praça, bem como alguns locais ao seu redor e o ponto de onde inicia a caminhada, estão representados na figura:<br>\n                    <img src=\"/imagens/praca.png\" alt=\"Esquema da Praça Circular\" class=\"img-center\"><br>\n                    Em uma tarde, Camile caminhou 4 125 metros, no sentido anti-horário, e parou. Qual dos locais indicados na figura é o mais próximo de sua parada?",
        "optionsHtml": [
          "Centro cultural.",
          "Drogaria.",
          "Lan house.",
          "Ponto de partida.",
          "Padaria."
        ],
        "explanationHtml": "Dividindo a distância total pela extensão da pista: 4125 / 500 = 8 voltas completas e sobra um resto de 125 metros. Como a pista tem 500m, 125m equivale exatamente a 1/4 de volta (ou 2/8). Caminhando no sentido anti-horário, 1/4 de volta a deixa exatamente em frente à Padaria."
      },
      {
        "id": "unit1_simulado2_2",
        "text": "Questão 2 (ENEM ADAPTADA) Em um aeroporto, os passageiros de um voo internacional que estava atrasado receberam, cada um, um cartão-alimentação no valor de R$ 45,00, válido apenas para os estabelecimentos comerciais daquele aeroporto. Uma família de 4 pessoas decidiu juntar seus cartões para jantar em um restaurante que oferecia as seguintes opções: • Prato feito (individual): R$ 38,50 • Pizza gigante (serve 4 pessoas): R$ 132,00 • Rodízio (por pessoa): R$ 48,00 Além do jantar, cada membro da família consumiu uma lata de suco no valor de R$ 6,50. Sabendo que o valor total dos cartões foi suficiente para pagar a janta e os sucos, e que não houve troco em dinheiro, qual foi a opção de jantar escolhida por essa família?",
        "options": [
          "4 pratos feitos.",
          "1 pizza gigante.",
          "4 rodízios.",
          "2 pratos feitos e 1 pizza gigante.",
          "2 rodízios e 2 pratos feitos."
        ],
        "correctIndex": 1,
        "explanation": "O valor total recebido pela família em cartões foi de 4 x R$ 45,00 = R$ 180,00. O consumo total de sucos foi de 4 x R$ 6,50 = R$ 26,00. Subtraindo o valor dos sucos do total dos cartões, restam R$ 180,00 - R$ 26,00 = R$ 154,00 para o jantar. A única opção de jantar cujo valor total não ultrapassa R$ 154,00 e atende a toda a família é a pizza gigante (R$ 132,00).",
        "contentHtml": "<strong>Questão 2 (ENEM ADAPTADA)</strong><br><br>\n                    Em um aeroporto, os passageiros de um voo internacional que estava atrasado receberam, cada um, um cartão-alimentação no valor de R$ 45,00, válido apenas para os estabelecimentos comerciais daquele aeroporto. Uma família de 4 pessoas decidiu juntar seus cartões para jantar em um restaurante que oferecia as seguintes opções:<br><br>\n                    • Prato feito (individual): R$ 38,50<br>\n                    • Pizza gigante (serve 4 pessoas): R$ 132,00<br>\n                    • Rodízio (por pessoa): R$ 48,00<br><br>\n                    Além do jantar, cada membro da família consumiu uma lata de suco no valor de R$ 6,50. Sabendo que o valor total dos cartões foi suficiente para pagar a janta e os sucos, e que não houve troco em dinheiro, qual foi a opção de jantar escolhida por essa família?",
        "optionsHtml": [
          "4 pratos feitos.",
          "1 pizza gigante.",
          "4 rodízios.",
          "2 pratos feitos e 1 pizza gigante.",
          "2 rodízios e 2 pratos feitos."
        ],
        "explanationHtml": "O valor total recebido pela família em cartões foi de 4 x R$ 45,00 = R$ 180,00. O consumo total de sucos foi de 4 x R$ 6,50 = R$ 26,00. Subtraindo o valor dos sucos do total dos cartões, restam R$ 180,00 - R$ 26,00 = R$ 154,00 para o jantar. A única opção de jantar cujo valor total não ultrapassa R$ 154,00 e atende a toda a família é a pizza gigante (R$ 132,00)."
      },
      {
        "id": "unit1_simulado2_3",
        "text": "Questão 3 (ENEM) Nosso calendário atual é embasado no antigo calendário romano, que, por sua vez, tinha como base as fases da lua. Os meses de janeiro, março, maio, julho, agosto, outubro e dezembro possuem 31 dias, e os demais, com exceção de fevereiro, possuem 30 dias. O dia 31 de março de certo ano ocorreu em uma terça-feira. Nesse mesmo ano, qual dia da semana será o dia 12 de outubro?",
        "options": [
          "Domingo.",
          "Segunda-feira.",
          "Terça-feira.",
          "Quinta-feira.",
          "Sexta-feira."
        ],
        "correctIndex": 1,
        "explanation": "Contamos os dias de 31 de março até 12 de outubro: Abril (30), Maio (31), Junho (30), Julho (31), Agosto (31), Setembro (30) e 12 dias de Outubro. Total = 30+31+30+31+31+30+12 = 195 dias. Dividindo 195 por 7, temos resto 6. Avançando 6 dias a partir de terça-feira (ou voltando 1 dia), chegamos a uma segunda-feira.",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                    Nosso calendário atual é embasado no antigo calendário romano, que, por sua vez, tinha como base as fases da lua. Os meses de janeiro, março, maio, julho, agosto, outubro e dezembro possuem 31 dias, e os demais, com exceção de fevereiro, possuem 30 dias. O dia 31 de março de certo ano ocorreu em uma terça-feira.<br><br>\n                    Nesse mesmo ano, qual dia da semana será o dia 12 de outubro?",
        "optionsHtml": [
          "Domingo.",
          "Segunda-feira.",
          "Terça-feira.",
          "Quinta-feira.",
          "Sexta-feira."
        ],
        "explanationHtml": "Contamos os dias de 31 de março até 12 de outubro: Abril (30), Maio (31), Junho (30), Julho (31), Agosto (31), Setembro (30) e 12 dias de Outubro. Total = 30+31+30+31+31+30+12 = 195 dias. Dividindo 195 por 7, temos resto 6. Avançando 6 dias a partir de terça-feira (ou voltando 1 dia), chegamos a uma segunda-feira."
      },
      {
        "id": "unit1_simulado2_4",
        "text": "Questão 4 (INÉDITA) Certa vez, um amigo me ligou para resolver um problemado seu cotidiano. Ele é proprietário de uma agência de turismo, chamada Alex Carioca Turismo. Em um determinado dia, ele estava com um grupo de 846 pessoas que iriam fazer um retiro religioso, e sua empresa dispõe de ônibus com capacidade máxima de 45 pessoas e vans com capacidade para 20 pessoas. A tabela abaixo mostra os preços cobrados pela empresa de turismo para o aluguel de ônibus e vans. Transporte (IDA E VOLTA) Preço ônibus R$ 600,00 van R$ 280,00 A quantidade mínima de ônibus e vans que esse grupo deve alugar para fazer essa viagem, de modo que todos se acomodem sentados e que tenham o menor custo possível para eles, é",
        "options": [
          "18 ônibus.",
          "19 ônibus.",
          "18 ônibus e 1 van.",
          "18 ônibus e 2 vans.",
          "43 vans."
        ],
        "correctIndex": 3,
        "explanation": "O custo por pessoa no ônibus cheio é R$600/45 ≈ R$13,33, e na van é R$280/20 = R$14,00. Logo, compensa usar o máximo de ônibus possível. 846 / 45 = 18 ônibus com resto de 36 pessoas. Para levar as 36 pessoas restantes: alugar mais 1 ônibus custaria R$600,00. Alugar vans para 36 pessoas exigiria 2 vans (pois cada uma leva 20), totalizando 2 x R$280,00 = R$560,00. Como R$560,00 é menor que R$600,00, o melhor cenário econômico é 18 ônibus e 2 vans.",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n                    Certa vez, um amigo me ligou para resolver um problemado seu cotidiano. Ele é proprietário de uma agência de turismo, chamada Alex Carioca Turismo.<br>\n                    Em um determinado dia, ele estava com um grupo de 846 pessoas que iriam fazer um retiro religioso, e sua empresa dispõe de ônibus com capacidade máxima de 45 pessoas e vans com capacidade para 20 pessoas. A tabela abaixo mostra os preços cobrados pela empresa de turismo para o aluguel de ônibus e vans.<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px; text-align: left;\">Transporte (IDA E VOLTA)</th>\n                                <th style=\"padding: 10px; text-align: center;\">Preço</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">ônibus</td><td style=\"padding: 10px; text-align: center;\">R$ 600,00</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">van</td><td style=\"padding: 10px; text-align: center;\">R$ 280,00</td></tr>\n                        </tbody>\n                    </table>\n                    A quantidade mínima de ônibus e vans que esse grupo deve alugar para fazer essa viagem, de modo que todos se acomodem sentados e que tenham o menor custo possível para eles, é",
        "optionsHtml": [
          "18 ônibus.",
          "19 ônibus.",
          "18 ônibus e 1 van.",
          "18 ônibus e 2 vans.",
          "43 vans."
        ],
        "explanationHtml": "O custo por pessoa no ônibus cheio é R$600/45 ≈ R$13,33, e na van é R$280/20 = R$14,00. Logo, compensa usar o máximo de ônibus possível. 846 / 45 = 18 ônibus com resto de 36 pessoas. Para levar as 36 pessoas restantes: alugar mais 1 ônibus custaria R$600,00. Alugar vans para 36 pessoas exigiria 2 vans (pois cada uma leva 20), totalizando 2 x R$280,00 = R$560,00. Como R$560,00 é menor que R$600,00, o melhor cenário econômico é 18 ônibus e 2 vans."
      },
      {
        "id": "unit1_simulado2_5",
        "text": "Questão 5 (PUC-RS) Pitágoras estabeleceu a seguinte relação entre as sete notas musicais e os números racionais: Dó Ré Mi Fá Sol Lá Si Dó 1 8 9 64 81 3 4 2 3 16 27 128 243 1 2 Para encontrar o número 16 27 (relativo à nota Lá), multiplica-se 2 3 (o correspondente à nota Sol) por 8 9 . Assim, para obter 3 4 (relativo à nota Fá), deve-se multiplicar 64 81 (da nota Mi) por",
        "options": [
          "8 9",
          "9 8",
          "243 256",
          "256 243",
          "192 324"
        ],
        "correctIndex": 2,
        "explanation": "Para descobrir o fator multiplicador, basta efetuar a operação inversa (divisão): (3/4) ÷ (64/81) = (3/4) * (81/64) = 243/256.",
        "contentHtml": "<strong>Questão 5 (PUC-RS)</strong><br><br>\n                    Pitágoras estabeleceu a seguinte relação entre as sete notas musicais e os números racionais:<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem; text-align: center;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px;\">Dó</th>\n                                <th style=\"padding: 10px;\">Ré</th>\n                                <th style=\"padding: 10px;\">Mi</th>\n                                <th style=\"padding: 10px;\">Fá</th>\n                                <th style=\"padding: 10px;\">Sol</th>\n                                <th style=\"padding: 10px;\">Lá</th>\n                                <th style=\"padding: 10px;\">Si</th>\n                                <th style=\"padding: 10px;\">Dó</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7; background: #fff;\">\n                                <td style=\"padding: 10px;\">1</td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">8</span><span>9</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">64</span><span>81</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">2</span><span>3</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">16</span><span>27</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">128</span><span>243</span></div></td>\n                                <td style=\"padding: 10px;\"><div class=\"frac\"><span class=\"nominator\">1</span><span>2</span></div></td>\n                            </tr>\n                        </tbody>\n                    </table><br>\n                    Para encontrar o número <div class=\"frac\"><span class=\"nominator\">16</span><span>27</span></div> (relativo à nota Lá), multiplica-se <div class=\"frac\"><span class=\"nominator\">2</span><span>3</span></div> (o correspondente à nota Sol) por <div class=\"frac\"><span class=\"nominator\">8</span><span>9</span></div>. Assim, para obter <div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div> (relativo à nota Fá), deve-se multiplicar <div class=\"frac\"><span class=\"nominator\">64</span><span>81</span></div> (da nota Mi) por",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">8</span><span>9</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">9</span><span>8</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">243</span><span>256</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">256</span><span>243</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">192</span><span>324</span></div>"
        ],
        "explanationHtml": "Para descobrir o fator multiplicador, basta efetuar a operação inversa (divisão): (3/4) ÷ (64/81) = (3/4) * (81/64) = 243/256."
      },
      {
        "id": "unit1_simulado2_6",
        "text": "Questão 6 (UFSP) Um confeiteiro vende bolos de mesmo tamanho e cortados em fatias iguais. Certo dia, ele colocou três bolos à venda em fatias. Venderam-se 3 4 de um bolo de chocolate, 2 3 de um bolo de creme e 5 6 de um bolo de nozes. A fração correspondente ao que sobrou dos bolos é",
        "options": [
          "1 2",
          "1 4",
          "3 4",
          "5 6",
          "3 8"
        ],
        "correctIndex": 2,
        "explanation": "Calculamos o que sobrou de cada bolo individualmente: Chocolate sobrou 1/4 (1 - 3/4); Creme sobrou 1/3 (1 - 2/3); Nozes sobrou 1/6 (1 - 5/6). Somando as sobras: 1/4 + 1/3 + 1/6 = 3/12 + 4/12 + 2/12 = 9/12. Simplificando a fração por 3, obtemos 3/4.",
        "contentHtml": "<strong>Questão 6 (UFSP)</strong><br><br>\n                    Um confeiteiro vende bolos de mesmo tamanho e cortados em fatias iguais. Certo dia, ele colocou três bolos à venda em fatias. Venderam-se <div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div> de um bolo de chocolate, <div class=\"frac\"><span class=\"nominator\">2</span><span>3</span></div> de um bolo de creme e <div class=\"frac\"><span class=\"nominator\">5</span><span>6</span></div> de um bolo de nozes. A fração correspondente ao que sobrou dos bolos é",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">1</span><span>2</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">1</span><span>4</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">5</span><span>6</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">3</span><span>8</span></div>"
        ],
        "explanationHtml": "Calculamos o que sobrou de cada bolo individualmente: Chocolate sobrou 1/4 (1 - 3/4); Creme sobrou 1/3 (1 - 2/3); Nozes sobrou 1/6 (1 - 5/6). Somando as sobras: 1/4 + 1/3 + 1/6 = 3/12 + 4/12 + 2/12 = 9/12. Simplificando a fração por 3, obtemos 3/4."
      },
      {
        "id": "unit1_simulado2_7",
        "text": "Questão 7 (UNIOESTE ADAPTADA) Um produtor rural possui dois açudes, A e B, de igual capacidade, utilizados para armazenamento de água para irrigação. Durante o período de estiagem, o açude A estava com 1 4 de sua capacidade, e o açude B com apenas 1 5 . Para reduzir custos de manutenção, o produtor resolveu passar 3 4 da água do açude B para o açude A e trabalhar apenas com este último. Após essa operação, sendo V litros a capacidade destes açudes quando estão cheios, para que o açude A fique completo, faltam",
        "options": [
          "3 4 V litros.",
          "2 5 V litros.",
          "2 3 V litros.",
          "3 5 V litros.",
          "4 3 V litros."
        ],
        "correctIndex": 3,
        "explanation": "A quantidade transferida de B para A é: 3/4 * 1/5 = 3/20 de V. O açude A já possuía 1/4 de sua capacidade (ou 5/20). O novo volume de A passa a ser: 5/20 + 3/20 = 8/20 = 2/5 de V. Para ficar completamente cheio (5/5), faltam: 5/5 - 2/5 = 3/5 V litros.",
        "contentHtml": "<strong>Questão 7 (UNIOESTE ADAPTADA)</strong><br><br>\n                    Um produtor rural possui dois açudes, A e B, de igual capacidade, utilizados para armazenamento de água para irrigação. Durante o período de estiagem, o açude A estava com <div class=\"frac\"><span class=\"nominator\">1</span><span>4</span></div> de sua capacidade, e o açude B com apenas <div class=\"frac\"><span class=\"nominator\">1</span><span>5</span></div>. Para reduzir custos de manutenção, o produtor resolveu passar <div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div> da água do açude B para o açude A e trabalhar apenas com este último. Após essa operação, sendo V litros a capacidade destes açudes quando estão cheios, para que o açude A fique completo, faltam",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">3</span><span>4</span></div> V litros.",
          "<div class=\"frac\"><span class=\"nominator\">2</span><span>5</span></div> V litros.",
          "<div class=\"frac\"><span class=\"nominator\">2</span><span>3</span></div> V litros.",
          "<div class=\"frac\"><span class=\"nominator\">3</span><span>5</span></div> V litros.",
          "<div class=\"frac\"><span class=\"nominator\">4</span><span>3</span></div> V litros."
        ],
        "explanationHtml": "A quantidade transferida de B para A é: 3/4 * 1/5 = 3/20 de V. O açude A já possuía 1/4 de sua capacidade (ou 5/20). O novo volume de A passa a ser: 5/20 + 3/20 = 8/20 = 2/5 de V. Para ficar completamente cheio (5/5), faltam: 5/5 - 2/5 = 3/5 V litros."
      },
      {
        "id": "unit1_simulado2_8",
        "text": "Questão 8 (ENEM ADAPTADA) No tanque de um certo carro de passeio, cabem até 50 L de combustível, e o rendimento médio desse carro na estrada é de 15 km/L. Ao sair para uma viagem de 600 km, o motorista observou que o marcador de combustível estava exatamente sobre uma das marcas da escala divisória do medidor, conforme figura a seguir. Como o motorista conhece o percurso, sabe que existem, até a chegada a seu destino, cinco postos de abastecimento de combustível, localizados a 150 km, 187 km, 210 km, 250 km e 500 km do ponto de partida. Qual o último posto em que o motorista poderá abastecer antes que o combustível do tanque acabe?",
        "options": [
          "1º posto (a 150 km).",
          "2º posto (a 187 km).",
          "3º posto (a 210 km).",
          "4º posto (a 250 km).",
          "5º posto (a 500 km)."
        ],
        "correctIndex": 3,
        "explanation": "O ponteiro do medidor indica que o tanque está com 3/4 de sua capacidade máxima (50 litros). Calculamos a quantidade de combustível disponível: 3/4 * 50 = 37,5 litros. Como o rendimento do veículo é de 15 km/L, a autonomia máxima atual é de: 37,5 L * 15 km/L = 562,5 km. Olhando a posição dos postos ao longo do trajeto, o motorista consegue passar tranquilamente pelos postos de 150 km, 187 km, 210 km e o último possível antes do limite de pane seca é o de 250 km, pois o próximo (500 km) já excederia o combustível atual.",
        "contentHtml": "<strong>Questão 8 (ENEM ADAPTADA)</strong><br><br>\n                    No tanque de um certo carro de passeio, cabem até 50 L de combustível, e o rendimento médio desse carro na estrada é de 15 km/L. Ao sair para uma viagem de 600 km, o motorista observou que o marcador de combustível estava exatamente sobre uma das marcas da escala divisória do medidor, conforme figura a seguir.<br>\n                    <img src=\"/imagens/marcador.jpeg\" alt=\"Marcador de Combustível indicando 3/4\" class=\"img-center\"><br>\n                    Como o motorista conhece o percurso, sabe que existem, até a chegada a seu destino, cinco postos de abastecimento de combustível, localizados a 150 km, 187 km, 210 km, 250 km e 500 km do ponto de partida. Qual o último posto em que o motorista poderá abastecer antes que o combustível do tanque acabe?",
        "optionsHtml": [
          "1º posto (a 150 km).",
          "2º posto (a 187 km).",
          "3º posto (a 210 km).",
          "4º posto (a 250 km).",
          "5º posto (a 500 km)."
        ],
        "explanationHtml": "O ponteiro do medidor indica que o tanque está com 3/4 de sua capacidade máxima (50 litros). Calculamos a quantidade de combustível disponível: 3/4 * 50 = 37,5 litros. Como o rendimento do veículo é de 15 km/L, a autonomia máxima atual é de: 37,5 L * 15 km/L = 562,5 km. Olhando a posição dos postos ao longo do trajeto, o motorista consegue passar tranquilamente pelos postos de 150 km, 187 km, 210 km e o último possível antes do limite de pane seca é o de 250 km, pois o próximo (500 km) já excederia o combustível atual."
      }
    ]
  },
  "unit2": {
    "avaliacao": [
      {
        "id": "unit2_avaliacao_1",
        "text": "Questão 1 (ENEM) Boliche é um jogo em que se arremessa uma bola sobre uma pista para atingir dez pinos, dispostos em uma formação de base triangular, buscando derrubar o maior número de pinos. A razão entre o total de vezes em que o jogador derruba todos os pinos e o número de jogadas determina seu desempenho. Em uma disputa entre os cinco jogadores, foram obtidos os seguintes resultados: JOGADOR I Derrubou todos os pinos 50 vezes em 85 jogadas. JOGADOR II Derrubou todos os pinos 40 vezes em 65 jogadas. JOGADOR III Derrubou todos os pinos 20 vezes em 65 jogadas. JOGADOR IV Derrubou todos os pinos 30 vezes em 40 jogadas. JOGADOR V Derrubou todos os pinos 48 vezes em 90 jogadas. Qual desses jogadores apresentou maior desempenho?",
        "options": [
          "I.",
          "II.",
          "III.",
          "IV.",
          "V."
        ],
        "correctIndex": 3,
        "explanation": "Para comparar os desempenhos, avaliamos as frações ou valores decimais aproximados de cada razão (sucessos/jogadas): Jogador I: 50/85 ≈ 0,588; Jogador II: 40/65 ≈ 0,615; Jogador III: 20/65 ≈ 0,307; Jogador IV: 30/40 = 0,750; Jogador V: 48/90 ≈ 0,533. O maior desempenho é o do Jogador IV.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                    Boliche é um jogo em que se arremessa uma bola sobre uma pista para atingir dez pinos, dispostos em uma formação de base triangular, buscando derrubar o maior número de pinos. A razão entre o total de vezes em que o jogador derruba todos os pinos e o número de jogadas determina seu desempenho. Em uma disputa entre os cinco jogadores, foram obtidos os seguintes resultados:<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR I</td><td style=\"padding: 10px;\">Derrubou todos os pinos 50 vezes em 85 jogadas.</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR II</td><td style=\"padding: 10px;\">Derrubou todos os pinos 40 vezes em 65 jogadas.</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR III</td><td style=\"padding: 10px;\">Derrubou todos os pinos 20 vezes em 65 jogadas.</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR IV</td><td style=\"padding: 10px;\">Derrubou todos os pinos 30 vezes em 40 jogadas.</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR V</td><td style=\"padding: 10px;\">Derrubou todos os pinos 48 vezes em 90 jogadas.</td></tr>\n                        </tbody>\n                    </table>\n                    Qual desses jogadores apresentou maior desempenho?",
        "optionsHtml": [
          "I.",
          "II.",
          "III.",
          "IV.",
          "V."
        ],
        "explanationHtml": "Para comparar os desempenhos, avaliamos as frações ou valores decimais aproximados de cada razão (sucessos/jogadas): Jogador I: 50/85 ≈ 0,588; Jogador II: 40/65 ≈ 0,615; Jogador III: 20/65 ≈ 0,307; Jogador IV: 30/40 = 0,750; Jogador V: 48/90 ≈ 0,533. O maior desempenho é o do Jogador IV."
      },
      {
        "id": "unit2_avaliacao_2",
        "text": "Questão 2 (ENEM) Durante uma epidemia de uma gripe viral, o secretário de saúde de um município comprou 16 galões de álcool em gel, com 4 litros de capacidade cada um, para distribuir igualmente em recipientes para 10 escolas públicas do município. O fornecedor dispõe à venda diversos tipos de recipientes, com suas respectivas capacidades listadas: • Recipiente I: 0,125 litro. • Recipiente II: 0,250 litro. • Recipiente III: 0,320 litro. • Recipiente IV: 0,500 litro. • Recipiente V: 0,800 litro. O secretário de saúde comprará recipientes de um mesmo tipo, de modo a instalar 20 deles em cada escola, abastecidos com álcool em gel na sua capacidade máxima, de forma a utilizar todo o gel dos galões de uma só vez. Que tipo de recipiente o secretário de saúde deve comprar?",
        "options": [
          "I.",
          "II.",
          "III.",
          "IV.",
          "V."
        ],
        "correctIndex": 2,
        "explanation": "Total de álcool disponível: 16 galões × 4 litros = 64 litros. Total de recipientes a serem instalados: 10 escolas × 20 recipientes = 200 recipientes. Dividindo a capacidade total pelo número de recipientes: 64 litros / 200 = 0,320 litro. Portanto, deve ser comprado o Recipiente III.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                    Durante uma epidemia de uma gripe viral, o secretário de saúde de um município comprou 16 galões de álcool em gel, com 4 litros de capacidade cada um, para distribuir igualmente em recipientes para 10 escolas públicas do município. O fornecedor dispõe à venda diversos tipos de recipientes, com suas respectivas capacidades listadas:<br><br>\n                    • Recipiente I: 0,125 litro.<br>\n                    • Recipiente II: 0,250 litro.<br>\n                    • Recipiente III: 0,320 litro.<br>\n                    • Recipiente IV: 0,500 litro.<br>\n                    • Recipiente V: 0,800 litro.<br><br>\n                    O secretário de saúde comprará recipientes de um mesmo tipo, de modo a instalar 20 deles em cada escola, abastecidos com álcool em gel na sua capacidade máxima, de forma a utilizar todo o gel dos galões de uma só vez.<br><br>\n                    Que tipo de recipiente o secretário de saúde deve comprar?",
        "optionsHtml": [
          "I.",
          "II.",
          "III.",
          "IV.",
          "V."
        ],
        "explanationHtml": "Total de álcool disponível: 16 galões × 4 litros = 64 litros. Total de recipientes a serem instalados: 10 escolas × 20 recipientes = 200 recipientes. Dividindo a capacidade total pelo número de recipientes: 64 litros / 200 = 0,320 litro. Portanto, deve ser comprado o Recipiente III."
      },
      {
        "id": "unit2_avaliacao_3",
        "text": "Questão 3 (INÉDITA) Dos 3,15 bilhões de raios que caem na Terra durante um ano, 100 milhões deles vêm cair no Brasil. A razão entre o número de raios que caem no Brasil e o número de raios que caem na Terra é igual a",
        "options": [
          "1 35",
          "2 63",
          "10 63",
          "5 61",
          "63 5"
        ],
        "correctIndex": 2,
        "explanation": "Escrevemos os valores na mesma unidade (milhões): 100 milhões no Brasil para 3.150 milhões na Terra (pois 3,15 bilhões = 3.150 milhões). Montando a razão: 100 / 3150. Simplificando por 10, cortando os zeros, obtemos 10/63.",
        "contentHtml": "<strong>Questão 3 (INÉDITA)</strong><br><br>\n                    Dos 3,15 bilhões de raios que caem na Terra durante um ano, 100 milhões deles vêm cair no Brasil.<br><br>\n                    A razão entre o número de raios que caem no Brasil e o número de raios que caem na Terra é igual a",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">1</span><span>35</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">2</span><span>63</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">10</span><span>63</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">5</span><span>61</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">63</span><span>5</span></div>"
        ],
        "explanationHtml": "Escrevemos os valores na mesma unidade (milhões): 100 milhões no Brasil para 3.150 milhões na Terra (pois 3,15 bilhões = 3.150 milhões). Montando a razão: 100 / 3150. Simplificando por 10, cortando os zeros, obtemos 10/63."
      },
      {
        "id": "unit2_avaliacao_4",
        "text": "Questão 4 (INÉDITA) Um morador que conseguiu juntar 10 litros de óleo, além de preservar o meio ambiente, consegue produzir sabão. Sabendo que a cada 4 litros de óleo é possível fazer 10 kg de sabão, quantos quilos serão produzidos?",
        "options": [
          "10 kg de sabão.",
          "15 kg de sabão.",
          "20 kg de sabão.",
          "25 kg de sabão.",
          "30 kg de sabão."
        ],
        "correctIndex": 3,
        "explanation": "Montando a proporção: se 4 litros produzem 10 kg, cada 1 litro produz 10 / 4 = 2,5 kg de sabão. Multiplicando pelo total arrecadado: 10 litros × 2,5 kg/litro = 25 kg de sabão.",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n                    Um morador que conseguiu juntar 10 litros de óleo, além de preservar o meio ambiente, consegue produzir sabão. Sabendo que a cada 4 litros de óleo é possível fazer 10 kg de sabão, quantos quilos serão produzidos?",
        "optionsHtml": [
          "10 kg de sabão.",
          "15 kg de sabão.",
          "20 kg de sabão.",
          "25 kg de sabão.",
          "30 kg de sabão."
        ],
        "explanationHtml": "Montando a proporção: se 4 litros produzem 10 kg, cada 1 litro produz 10 / 4 = 2,5 kg de sabão. Multiplicando pelo total arrecadado: 10 litros × 2,5 kg/litro = 25 kg de sabão."
      },
      {
        "id": "unit2_avaliacao_5",
        "text": "Questão 5 (ENEM) Um dos grandes problemas da poluição dos mananciais (rios, córregos e outros) ocorre pelo hábito de jogar óleo utilizado em frituras nos encanamentos que estão interligados com o sistema de esgoto. Se isso ocorrer, cada 10 litros de óleo poderão contaminar 10 milhões (10 7 ) de litros de água potável. Suponha que todas as famílias de uma cidade descartem os óleos de frituras através dos encanamentos e consumam 1 000 litros de óleo em frituras por semana. Qual seria, em litros, a quantidade de água potável contaminada por semana nessa cidade?",
        "options": [
          "10 2",
          "10 3",
          "10 4",
          "10 6",
          "10 9"
        ],
        "correctIndex": 4,
        "explanation": "A proporção é de 10 7 litros de água poluída para cada 10 litros de óleo (o que simplifica para 10 6 litros de água por litro de óleo). Para um consumo de 1 000 litros (10 3 litros) de óleo: 10 3 × 10 6 = 10 9 litros de água contaminada.",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                    Um dos grandes problemas da poluição dos mananciais (rios, córregos e outros) ocorre pelo hábito de jogar óleo utilizado em frituras nos encanamentos que estão interligados com o sistema de esgoto. Se isso ocorrer, cada 10 litros de óleo poderão contaminar 10 milhões (10<sup>7</sup>) de litros de água potável.<br><br>\n                    Suponha que todas as famílias de uma cidade descartem os óleos de frituras através dos encanamentos e consumam 1 000 litros de óleo em frituras por semana. Qual seria, em litros, a quantidade de água potável contaminada por semana nessa cidade?",
        "optionsHtml": [
          "10<sup>2</sup>",
          "10<sup>3</sup>",
          "10<sup>4</sup>",
          "10<sup>6</sup>",
          "10<sup>9</sup>"
        ],
        "explanationHtml": "A proporção é de 10<sup>7</sup> litros de água poluída para cada 10 litros de óleo (o que simplifica para 10<sup>6</sup> litros de água por litro de óleo). Para um consumo de 1 000 litros (10<sup>3</sup> litros) de óleo: 10<sup>3</sup> × 10<sup>6</sup> = 10<sup>9</sup> litros de água contaminada."
      },
      {
        "id": "unit2_avaliacao_6",
        "text": "Questão 6 (ENEM ADAPTADA) Uma pessoa que toma dois banhos diariamente, de 10 minutos cada, em um chuveiro com potência de 4 800 kWh que consome 4,8 kW por hora, consumirá, em sete dias, quantos kW?",
        "options": [
          "0,8.",
          "1,6.",
          "5,6.",
          "11,2.",
          "33,6."
        ],
        "correctIndex": 3,
        "explanation": "Cada dia possui 2 banhos de 10 minutos, totalizando 20 minutos por dia. Em 7 dias, o tempo total é de 7 × 20 = 140 minutos. Convertendo para horas: 140 / 60 = 7/3 horas. Como o consumo é de 4,8 kW por hora: Consumo = 4,8 × (7 / 3) = 1,6 × 7 = 11,2 kW.",
        "contentHtml": "<strong>Questão 6 (ENEM ADAPTADA)</strong><br><br>\n                    Uma pessoa que toma dois banhos diariamente, de 10 minutos cada, em um chuveiro com potência de 4 800 kWh que consome 4,8 kW por hora, consumirá, em sete dias, quantos kW?",
        "optionsHtml": [
          "0,8.",
          "1,6.",
          "5,6.",
          "11,2.",
          "33,6."
        ],
        "explanationHtml": "Cada dia possui 2 banhos de 10 minutos, totalizando 20 minutos por dia. Em 7 dias, o tempo total é de 7 × 20 = 140 minutos. Convertendo para horas: 140 / 60 = 7/3 horas. Como o consumo é de 4,8 kW por hora: Consumo = 4,8 × (7 / 3) = 1,6 × 7 = 11,2 kW."
      },
      {
        "id": "unit2_avaliacao_7",
        "text": "Questão 7 (INÉDITA) O presidente de uma empresa resolveu premiar os três vendedores mais eficientes do ano com a quantia de R$ 13 500,00 (diretamente proporcional ao número de pontos obtidos). O vencedor, com 45 pontos, recebeu R$ 6 750,00 e o número de pontos do segundo colocado foi igual a 27. O número de pontos a menos que o terceiro colocado conseguiu em relação ao segundo colocado foi",
        "options": [
          "8.",
          "9.",
          "10.",
          "11.",
          "12."
        ],
        "correctIndex": 1,
        "explanation": "Constante de proporcionalidade: 6750 / 45 = R$ 150 por ponto. O segundo colocado tem 27 pontos, logo recebeu 27 × 150 = R$ 4.050. O que sobrou para o terceiro foi 13500 - 6750 - 4050 = R$ 2.700. Pontos do terceiro: 2700 / 150 = 18 pontos. A diferença de pontos entre o segundo e o terceiro é de 27 - 18 = 9.",
        "contentHtml": "<strong>Questão 7 (INÉDITA)</strong><br><br>\n                    O presidente de uma empresa resolveu premiar os três vendedores mais eficientes do ano com a quantia de R$ 13 500,00 (diretamente proporcional ao número de pontos obtidos). O vencedor, com 45 pontos, recebeu R$ 6 750,00 e o número de pontos do segundo colocado foi igual a 27. O número de pontos a menos que o terceiro colocado conseguiu em relação ao segundo colocado foi",
        "optionsHtml": [
          "8.",
          "9.",
          "10.",
          "11.",
          "12."
        ],
        "explanationHtml": "Constante de proporcionalidade: 6750 / 45 = R$ 150 por ponto. O segundo colocado tem 27 pontos, logo recebeu 27 × 150 = R$ 4.050. O que sobrou para o terceiro foi 13500 - 6750 - 4050 = R$ 2.700. Pontos do terceiro: 2700 / 150 = 18 pontos. A diferença de pontos entre o segundo e o terceiro é de 27 - 18 = 9."
      },
      {
        "id": "unit2_avaliacao_8",
        "text": "Questão 8 (INÉDITA) A pressão P que o vento exerce sobre um barco à vela cresce proporcionalmente com a área A da superfície da vela e com o quadrado da velocidade v do vento. Denominando k como sendo a constante positiva de proporcionalidade, tem-se que a pressão P é dada por",
        "options": [
          "P = k • &sqrt; A • v",
          "P = k • A • &sqrt; v",
          "P = k • A • v",
          "P = k • A • v 2",
          "P = k • A 2 • v"
        ],
        "correctIndex": 3,
        "explanation": "Diretamente proporcional significa que as grandezas multiplicam a constante k. Como cresce com a área (A) e com o quadrado da velocidade (v 2 ), a equação correta é P = k • A • v 2 .",
        "contentHtml": "<strong>Questão 8 (INÉDITA)</strong><br><br>\n                    A pressão P que o vento exerce sobre um barco à vela cresce proporcionalmente com a área A da superfície da vela e com o quadrado da velocidade v do vento. Denominando k como sendo a constante positiva de proporcionalidade, tem-se que a pressão P é dada por",
        "optionsHtml": [
          "P = k • &sqrt; A • v",
          "P = k • A • &sqrt; v",
          "P = k • A • v",
          "P = k • A • v<sup>2</sup>",
          "P = k • A<sup>2</sup> • v"
        ],
        "explanationHtml": "Diretamente proporcional significa que as grandezas multiplicam a constante k. Como cresce com a área (A) e com o quadrado da velocidade (v<sup>2</sup>), a equação correta é P = k • A • v<sup>2</sup>."
      },
      {
        "id": "unit2_avaliacao_9",
        "text": "Questão 9 (ENEM) No depósito de uma biblioteca há caixas contendo folhas de papel de 0,1 mm de espessura, e em cada uma delas estão anotados 10 títulos de livros diferentes. Essas folhas foram empilhadas formando uma torre vertical de 1 m de altura. Qual a representação, em potência de 10, correspondente à quantidade de títulos de livros registrados nesse empilhamento?",
        "options": [
          "10 2",
          "10 4",
          "10 5",
          "10 6",
          "10 7"
        ],
        "correctIndex": 2,
        "explanation": "Primeiro convertemos a altura da torre para milímetros: 1 m = 1 000 mm. O número de folhas é 1 000 mm / 0,1 mm = 10 000 folhas (10 4 ). Como cada folha possui 10 títulos, o total de títulos é 10 000 × 10 = 100 000, que equivale a 10 5 .",
        "contentHtml": "<strong>Questão 9 (ENEM)</strong><br><br>\n                    No depósito de uma biblioteca há caixas contendo folhas de papel de 0,1 mm de espessura, e em cada uma delas estão anotados 10 títulos de livros diferentes. Essas folhas foram empilhadas formando uma torre vertical de 1 m de altura.<br><br>\n                    Qual a representação, em potência de 10, correspondente à quantidade de títulos de livros registrados nesse empilhamento?",
        "optionsHtml": [
          "10<sup>2</sup>",
          "10<sup>4</sup>",
          "10<sup>5</sup>",
          "10<sup>6</sup>",
          "10<sup>7</sup>"
        ],
        "explanationHtml": "Primeiro convertemos a altura da torre para milímetros: 1 m = 1 000 mm. O número de folhas é 1 000 mm / 0,1 mm = 10 000 folhas (10<sup>4</sup>). Como cada folha possui 10 títulos, o total de títulos é 10 000 × 10 = 100 000, que equivale a 10<sup>5</sup>."
      },
      {
        "id": "unit2_avaliacao_10",
        "text": "Questão 10 (ENEM) Uma mãe correu à bula para verificar a dosagem de um remédio que precisava dar a seu filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2 kg de massa corporal a cada 8 horas. Se a mãe administrou corretamente 30 gotas do remédio a seu filho a cada 8 horas, então a massa corporal dele é de",
        "options": [
          "12 kg.",
          "16 kg.",
          "24 kg.",
          "36 kg.",
          "75 kg."
        ],
        "correctIndex": 0,
        "explanation": "Montando uma regra de três simples direta: 5 gotas estão para 2 kg, assim como 30 gotas estão para x kg. 5/2 = 30/x &rArr; 5x = 60 &rArr; x = 12 kg.",
        "contentHtml": "<strong>Questão 10 (ENEM)</strong><br><br>\n                    Uma mãe correu à bula para verificar a dosagem de um remédio que precisava dar a seu filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2 kg de massa corporal a cada 8 horas.<br><br>\n                    Se a mãe administrou corretamente 30 gotas do remédio a seu filho a cada 8 horas, então a massa corporal dele é de",
        "optionsHtml": [
          "12 kg.",
          "16 kg.",
          "24 kg.",
          "36 kg.",
          "75 kg."
        ],
        "explanationHtml": "Montando uma regra de três simples direta: 5 gotas estão para 2 kg, assim como 30 gotas estão para x kg. <br>5/2 = 30/x &rArr; 5x = 60 &rArr; x = 12 kg."
      }
    ],
    "substituta": [
      {
        "id": "unit2_substituta_1",
        "text": "Questão 1 (ENEM) O quadro apresenta o teor de cafeína em diferentes bebidas comumente consumidas pela população. BEBIDA VOLUME (ml) QUANTIDADE MÉDIA DE CAFEÍNA (mg) Café expresso 80,0 120 Café filtrado 50,0 35 Chá preto 180,0 45 Refrigerante de cola 250,0 80 Chocolate quente 60,0 25 Da análise do quadro, conclui-se que o menor teor de cafeína por unidade de volume está presente no",
        "options": [
          "café expresso.",
          "café filtrado.",
          "chá preto.",
          "refrigerante de cola.",
          "chocolate quente."
        ],
        "correctIndex": 2,
        "explanation": "Calculamos a razão de cafeína por volume (mg/ml) para cada bebida: Café expresso: 120/80 = 1,5 mg/ml; Café filtrado: 35/50 = 0,7 mg/ml; Chá preto: 45/180 = 0,25 mg/ml; Refrigerante de cola: 80/250 = 0,32 mg/ml; Chocolate quente: 25/60 ≈ 0,416 mg/ml. O menor valor está no chá preto.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                    O quadro apresenta o teor de cafeína em diferentes bebidas comumente consumidas pela população.<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                        <thead>\n                            <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                                <th style=\"padding: 10px; text-align: left;\">BEBIDA</th>\n                                <th style=\"padding: 10px; text-align: center;\">VOLUME (ml)</th>\n                                <th style=\"padding: 10px; text-align: center;\">QUANTIDADE MÉDIA DE CAFEÍNA (mg)</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Café expresso</td><td style=\"padding: 10px; text-align: center;\">80,0</td><td style=\"padding: 10px; text-align: center;\">120</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Café filtrado</td><td style=\"padding: 10px; text-align: center;\">50,0</td><td style=\"padding: 10px; text-align: center;\">35</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Chá preto</td><td style=\"padding: 10px; text-align: center;\">180,0</td><td style=\"padding: 10px; text-align: center;\">45</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Refrigerante de cola</td><td style=\"padding: 10px; text-align: center;\">250,0</td><td style=\"padding: 10px; text-align: center;\">80</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px;\">Chocolate quente</td><td style=\"padding: 10px; text-align: center;\">60,0</td><td style=\"padding: 10px; text-align: center;\">25</td></tr>\n                        </tbody>\n                    </table>\n                    Da análise do quadro, conclui-se que o menor teor de cafeína por unidade de volume está presente no",
        "optionsHtml": [
          "café expresso.",
          "café filtrado.",
          "chá preto.",
          "refrigerante de cola.",
          "chocolate quente."
        ],
        "explanationHtml": "Calculamos a razão de cafeína por volume (mg/ml) para cada bebida: Café expresso: 120/80 = 1,5 mg/ml; Café filtrado: 35/50 = 0,7 mg/ml; Chá preto: 45/180 = 0,25 mg/ml; Refrigerante de cola: 80/250 = 0,32 mg/ml; Chocolate quente: 25/60 ≈ 0,416 mg/ml. O menor valor está no chá preto."
      },
      {
        "id": "unit2_substituta_2",
        "text": "Questão 2 (INÉDITA) Com o intuito de pintar o quarto de sua filha, Antônio contratou um pintor muito experiente. Ele queria obter um tom de rosa bem clarinho (rosa bebê) para pintar as paredes do quarto onde vai ficar sua filha que irá nascer. Para obter a cor desejada (rosa bebê), o pintor misturou tinta branca com rosa pink (rosa escuro), na razão de 8 partes da primeira para 5 partes da segunda. Usando 6 litros de tinta branca, quantos litros de rosa bebê ele obterá?",
        "options": [
          "3,8.",
          "6.",
          "9.",
          "9,5.",
          "9,75."
        ],
        "correctIndex": 4,
        "explanation": "A proporção é de 8 partes de branca para 5 partes de pink, totalizando 13 partes de rosa bebê (8 + 5 = 13). Sabendo que 8 partes correspondem a 6 litros de tinta branca, determinamos o tamanho de cada parte: 6 / 8 = 0,75 litros por parte. O total da mistura será de 13 partes × 0,75 litros = 9,75 litros.",
        "contentHtml": "<strong>Questão 2 (INÉDITA)</strong><br><br>\n                    Com o intuito de pintar o quarto de sua filha, Antônio contratou um pintor muito experiente. Ele queria obter um tom de rosa bem clarinho (rosa bebê) para pintar as paredes do quarto onde vai ficar sua filha que irá nascer. Para obter a cor desejada (rosa bebê), o pintor misturou tinta branca com rosa pink (rosa escuro), na razão de 8 partes da primeira para 5 partes da segunda. Usando 6 litros de tinta branca, quantos litros de rosa bebê ele obterá?",
        "optionsHtml": [
          "3,8.",
          "6.",
          "9.",
          "9,5.",
          "9,75."
        ],
        "explanationHtml": "A proporção é de 8 partes de branca para 5 partes de pink, totalizando 13 partes de rosa bebê (8 + 5 = 13). Sabendo que 8 partes correspondem a 6 litros de tinta branca, determinamos o tamanho de cada parte: 6 / 8 = 0,75 litros por parte. O total da mistura será de 13 partes × 0,75 litros = 9,75 litros."
      },
      {
        "id": "unit2_substituta_3",
        "text": "Questão 3 (INÉDITA) O capitão de uma embarcação sabe que a distância entre o porto que está ancorado e o próximo porto que deverá atracar é de 4 000 km. Ao construir a carta náutica verificou, com o uso de um instrumento de medida, que a distância entre os dois portos é de 4 cm. A carta náutica analisada está em uma escala de",
        "options": [
          "1 : 1 000.",
          "1 : 10 000.",
          "1 : 1 000 000.",
          "1 : 100 000 000.",
          "1 : 1 000 000 000."
        ],
        "correctIndex": 3,
        "explanation": "A escala é a razão entre a medida no desenho (d) e a medida real (D), expressas na mesma unidade. d = 4 cm. D = 4.000 km = 400.000.000 cm. Escala = 4 / 400.000.000 = 1 : 100.000.000.",
        "contentHtml": "<strong>Questão 3 (INÉDITA)</strong><br><br>\n                    O capitão de uma embarcação sabe que a distância entre o porto que está ancorado e o próximo porto que deverá atracar é de 4 000 km. Ao construir a carta náutica verificou, com o uso de um instrumento de medida, que a distância entre os dois portos é de 4 cm. A carta náutica analisada está em uma escala de",
        "optionsHtml": [
          "1 : 1 000.",
          "1 : 10 000.",
          "1 : 1 000 000.",
          "1 : 100 000 000.",
          "1 : 1 000 000 000."
        ],
        "explanationHtml": "A escala é a razão entre a medida no desenho (d) e a medida real (D), expressas na mesma unidade. d = 4 cm. D = 4.000 km = 400.000.000 cm. Escala = 4 / 400.000.000 = 1 : 100.000.000."
      },
      {
        "id": "unit2_substituta_4",
        "text": "Questão 4 (ENEM) Nos últimos cinco anos, 32 mil mulheres de 20 a 24 anos foram internadas nos hospitais do SUS por causa de AVC. Entre os homens da mesma faixa etária, houve 28 mil internações pelo mesmo motivo. ÉPOCA, 26 abr. 2010 (adaptado). Suponha que, nos próximos cinco anos, haja um acréscimo de 8 mil internações de mulheres e que o acréscimo de internações de homens por AVC ocorra na mesma proporção. De acordo com as informações dadas, o número de homens que seriam internados por AVC, nos próximos cinco anos, corresponderia a",
        "options": [
          "4 mil.",
          "9 mil.",
          "21 mil.",
          "35 mil.",
          "39 mil."
        ],
        "correctIndex": 3,
        "explanation": "A razão do acréscimo feminino é de 8 mil sobre as 32 mil internações iniciais (8/32 = 1/4 ou 25%). Mantendo a mesma proporção para os homens, calculamos o acréscimo deles: 28 mil × 25% = 7 mil. Portanto, o total de homens internados nos próximos cinco anos será de 28 mil + 7 mil = 35 mil.",
        "contentHtml": "<strong>Questão 4 (ENEM)</strong><br><br>\n                    Nos últimos cinco anos, 32 mil mulheres de 20 a 24 anos foram internadas nos hospitais do SUS por causa de AVC. Entre os homens da mesma faixa etária, houve 28 mil internações pelo mesmo motivo.<br>\n                    <div style=\"font-size: 0.8rem; color: #718096; margin-bottom: 15px;\">ÉPOCA, 26 abr. 2010 (adaptado).</div>\n                    Suponha que, nos próximos cinco anos, haja um acréscimo de 8 mil internações de mulheres e que o acréscimo de internações de homens por AVC ocorra na mesma proporção.<br><br>\n                    De acordo com as informações dadas, o número de homens que seriam internados por AVC, nos próximos cinco anos, corresponderia a",
        "optionsHtml": [
          "4 mil.",
          "9 mil.",
          "21 mil.",
          "35 mil.",
          "39 mil."
        ],
        "explanationHtml": "A razão do acréscimo feminino é de 8 mil sobre as 32 mil internações iniciais (8/32 = 1/4 ou 25%). Mantendo a mesma proporção para os homens, calculamos o acréscimo deles: 28 mil × 25% = 7 mil. Portanto, o total de homens internados nos próximos cinco anos será de 28 mil + 7 mil = 35 mil."
      },
      {
        "id": "unit2_substituta_5",
        "text": "Questão 5 (INÉDITA) Uma piscina tem a forma de um paralelepípedo retângulo de 10 m de largura, 15 m de comprimento e 2 m de profundidade. Para tratar a água dessa piscina, é preciso adicionar 1 kg de certo produto químico a cada 2 500 litros de água. Estando ela completamente cheia de água, e sabendo-se que 1 m³ equivale a 1 000 litros, a quantidade em quilos do produto químico que deverá ser usada para o tratamento é",
        "options": [
          "12 kg.",
          "60 kg.",
          "120 kg.",
          "600 kg.",
          "1.200 kg."
        ],
        "correctIndex": 2,
        "explanation": "Primeiro calculamos o volume da piscina: 10m × 15m × 2m = 300 m³. Convertendo para litros: 300 × 1000 = 300.000 litros. Sabendo que é usado 1 kg a cada 2.500 litros: 300.000 / 2.500 = 120 kg do produto.",
        "contentHtml": "<strong>Questão 5 (INÉDITA)</strong><br><br>\n                    Uma piscina tem a forma de um paralelepípedo retângulo de 10 m de largura, 15 m de comprimento e 2 m de profundidade. Para tratar a água dessa piscina, é preciso adicionar 1 kg de certo produto químico a cada 2 500 litros de água. Estando ela completamente cheia de água, e sabendo-se que 1 m³ equivale a 1 000 litros, a quantidade em quilos do produto químico que deverá ser usada para o tratamento é",
        "optionsHtml": [
          "12 kg.",
          "60 kg.",
          "120 kg.",
          "600 kg.",
          "1.200 kg."
        ],
        "explanationHtml": "Primeiro calculamos o volume da piscina: 10m × 15m × 2m = 300 m³. Convertendo para litros: 300 × 1000 = 300.000 litros. Sabendo que é usado 1 kg a cada 2.500 litros: 300.000 / 2.500 = 120 kg do produto."
      },
      {
        "id": "unit2_substituta_6",
        "text": "Questão 6 (ENEM/PPL) Médicos alertam sobre a importância de educar as crianças para terem hábitos alimentares saudáveis. Por exemplo, analisando-se uma bolacha com recheio de chocolate (25 g) e um pé de alface (25 g), observam-se as seguintes quantidades de nutrientes, respectivamente: • carboidratos: 15 g e 0,5 g; • proteínas: 1,9 g e 0,5 g. Disponível em: veja.abril.com.br. Acesso em: 27 abr. 2010 (adaptado). Considerando as informações apresentadas, qual deve ser o número de pés de alface consumidos para se obter a mesma quantidade de carboidratos de uma bolacha?",
        "options": [
          "50.",
          "30.",
          "14.",
          "8.",
          "7."
        ],
        "correctIndex": 1,
        "explanation": "Uma bolacha possui 15 g de carboidratos e um pé de alface possui 0,5 g. Para encontrar a quantidade necessária de alface dividimos a quantidade da bolacha pela do alface: 15 / 0,5 = 30 pés de alface.",
        "contentHtml": "<strong>Questão 6 (ENEM/PPL)</strong><br><br>\n                    Médicos alertam sobre a importância de educar as crianças para terem hábitos alimentares saudáveis. Por exemplo, analisando-se uma bolacha com recheio de chocolate (25 g) e um pé de alface (25 g), observam-se as seguintes quantidades de nutrientes, respectivamente:<br>\n                    • carboidratos: 15 g e 0,5 g;<br>\n                    • proteínas: 1,9 g e 0,5 g.<br>\n                    <div style=\"font-size: 0.8rem; color: #718096; margin-bottom: 15px;\">Disponível em: veja.abril.com.br. Acesso em: 27 abr. 2010 (adaptado).</div>\n                    Considerando as informações apresentadas, qual deve ser o número de pés de alface consumidos para se obter a mesma quantidade de carboidratos de uma bolacha?",
        "optionsHtml": [
          "50.",
          "30.",
          "14.",
          "8.",
          "7."
        ],
        "explanationHtml": "Uma bolacha possui 15 g de carboidratos e um pé de alface possui 0,5 g. Para encontrar a quantidade necessária de alface dividimos a quantidade da bolacha pela do alface: 15 / 0,5 = 30 pés de alface."
      },
      {
        "id": "unit2_substituta_7",
        "text": "Questão 7 (ENEM) A resistência mecânica S de uma viga de madeira, em forma de um paralelepípedo retângulo, é diretamente proporcional à sua largura (b) e ao quadrado de sua altura (d) e inversamente proporcional ao quadrado da distância entre os suportes da viga, que coincide com o seu comprimento (x), conforme ilustra a figura. A constante de proporcionalidade k é chamada de resistência da viga. A expressão que traduz a resistência S dessa viga de madeira é",
        "options": [
          "k • b • d 2 x 2",
          "k • b • d x 2",
          "k • b • d 2 x",
          "k • b 2 • d x 2",
          "k • b • 2d 2x"
        ],
        "correctIndex": 0,
        "explanation": "As grandezas diretamente proporcionais (b e d 2 ) multiplicam a constante k no numerador. A grandeza inversamente proporcional (x 2 ) vai para o denominador. Portanto: S = (k • b • d 2 ) / x 2 .",
        "contentHtml": "<strong>Questão 7 (ENEM)</strong><br><br>\n                    A resistência mecânica S de uma viga de madeira, em forma de um paralelepípedo retângulo, é diretamente proporcional à sua largura (b) e ao quadrado de sua altura (d) e inversamente proporcional ao quadrado da distância entre os suportes da viga, que coincide com o seu comprimento (x), conforme ilustra a figura. A constante de proporcionalidade k é chamada de resistência da viga.<br><br>\n                    <img src=\"/imagens/madeira.jpeg\" alt=\"Dimensões da viga\" class=\"img-center\"><br>\n                    A expressão que traduz a resistência S dessa viga de madeira é",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">k • b • d<sup>2</sup></span><span>x<sup>2</sup></span></div>",
          "<div class=\"frac\"><span class=\"nominator\">k • b • d</span><span>x<sup>2</sup></span></div>",
          "<div class=\"frac\"><span class=\"nominator\">k • b • d<sup>2</sup></span><span>x</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">k • b<sup>2</sup> • d</span><span>x<sup>2</sup></span></div>",
          "<div class=\"frac\"><span class=\"nominator\">k • b • 2d</span><span>2x</span></div>"
        ],
        "explanationHtml": "As grandezas diretamente proporcionais (b e d<sup>2</sup>) multiplicam a constante k no numerador. A grandeza inversamente proporcional (x<sup>2</sup>) vai para o denominador. Portanto: S = (k • b • d<sup>2</sup>) / x<sup>2</sup>."
      },
      {
        "id": "unit2_substituta_8",
        "text": "Questão 8 (ENEM) Pedro ganhou R$ 360 000,00 em uma loteria federal e resolveu dividir integralmente o prêmio entre os seus três filhos, Ana, Renato e Carlos, de forma que cada um receba uma quantia que seja inversamente proporcional às suas idades. Sabendo que Ana tem 4 anos, Renato, 5 anos e Carlos, 20 anos, eles receberão, respectivamente:",
        "options": [
          "R$ 54 000,00; R$ 216 000,00 e R$ 90 000,00.",
          "R$ 90 000,00; R$ 54 000,00 e R$ 216 000,00.",
          "R$ 216 000,00; R$ 90 000,00 e R$ 54 000,00.",
          "R$ 180 000,00; R$ 144 000,00 e R$ 36 000,00.",
          "R$ 180 000,00; R$ 120 000,00 e R$ 60 000,00."
        ],
        "correctIndex": 3,
        "explanation": "Sendo inversa, a soma das frações das idades multiplicada por uma constante x é igual ao prêmio: x/4 + x/5 + x/20 = 360.000. O MMC é 20, transformando a equação em 5x/20 + 4x/20 + 1x/20 = 360.000 -> 10x/20 = 360.000 -> 0,5x = 360.000 -> x = 720.000. Agora dividimos pelas idades: Ana = 720.000/4 = R$ 180.000; Renato = 720.000/5 = R$ 144.000; Carlos = 720.000/20 = R$ 36.000.",
        "contentHtml": "<strong>Questão 8 (ENEM)</strong><br><br>\n                    Pedro ganhou R$ 360 000,00 em uma loteria federal e resolveu dividir integralmente o prêmio entre os seus três filhos, Ana, Renato e Carlos, de forma que cada um receba uma quantia que seja inversamente proporcional às suas idades. Sabendo que Ana tem 4 anos, Renato, 5 anos e Carlos, 20 anos, eles receberão, respectivamente:",
        "optionsHtml": [
          "R$ 54 000,00; R$ 216 000,00 e R$ 90 000,00.",
          "R$ 90 000,00; R$ 54 000,00 e R$ 216 000,00.",
          "R$ 216 000,00; R$ 90 000,00 e R$ 54 000,00.",
          "R$ 180 000,00; R$ 144 000,00 e R$ 36 000,00.",
          "R$ 180 000,00; R$ 120 000,00 e R$ 60 000,00."
        ],
        "explanationHtml": "Sendo inversa, a soma das frações das idades multiplicada por uma constante x é igual ao prêmio: x/4 + x/5 + x/20 = 360.000. O MMC é 20, transformando a equação em 5x/20 + 4x/20 + 1x/20 = 360.000 -> 10x/20 = 360.000 -> 0,5x = 360.000 -> x = 720.000. Agora dividimos pelas idades: Ana = 720.000/4 = R$ 180.000; Renato = 720.000/5 = R$ 144.000; Carlos = 720.000/20 = R$ 36.000."
      },
      {
        "id": "unit2_substituta_9",
        "text": "Questão 9 (INÉDITA) Em uma bicicleta elétrica, a autonomia total da bateria carregada por oito horas é de 56 quilômetros de deslocamento em média. A bateria é similar às dos celulares: descarrega de forma linear. Alexandro recarregou por apenas 2 horas a bateria da sua bicicleta que estava totalmente descarregada, e pretende ir à escola que fica a 7,5 quilômetros da sua casa, e voltar. A distância, em quilômetros, que Alexandro terá que caminhar após descarregar por completo a bateria de sua bicicleta é de",
        "options": [
          "1.",
          "1,5.",
          "2.",
          "2,5.",
          "3."
        ],
        "correctIndex": 0,
        "explanation": "Com 8 horas de carga, a autonomia é de 56 km. Como o carregamento é linear, com 2 horas de carga (1/4 do tempo total) ele terá 56 / 4 = 14 km de autonomia. O trajeto total de ida e volta para a escola é de 7,5 + 7,5 = 15 km. Portanto, faltará cobrir a pé uma distância de 15 - 14 = 1 km.",
        "contentHtml": "<strong>Questão 9 (INÉDITA)</strong><br><br>\n                    Em uma bicicleta elétrica, a autonomia total da bateria carregada por oito horas é de 56 quilômetros de deslocamento em média. A bateria é similar às dos celulares: descarrega de forma linear. Alexandro recarregou por apenas 2 horas a bateria da sua bicicleta que estava totalmente descarregada, e pretende ir à escola que fica a 7,5 quilômetros da sua casa, e voltar.<br><br>\n                    A distância, em quilômetros, que Alexandro terá que caminhar após descarregar por completo a bateria de sua bicicleta é de",
        "optionsHtml": [
          "1.",
          "1,5.",
          "2.",
          "2,5.",
          "3."
        ],
        "explanationHtml": "Com 8 horas de carga, a autonomia é de 56 km. Como o carregamento é linear, com 2 horas de carga (1/4 do tempo total) ele terá 56 / 4 = 14 km de autonomia. <br>O trajeto total de ida e volta para a escola é de 7,5 + 7,5 = 15 km. <br>Portanto, faltará cobrir a pé uma distância de 15 - 14 = 1 km."
      },
      {
        "id": "unit2_substituta_10",
        "text": "Questão 10 (INÉDITA) Numa empresa de grande porte, sabe-se que 5 máquinas, todas de igual eficiência, são capazes de produzir 500 peças de um determinado produto em 5 dias, se operarem durante 5 horas por dia. Olhando agora essa situação, em que 10 máquinas iguais às primeiras operassem 10 horas por dia, durante 10 dias, conclui-se que o número de peças produzidas seria igual a",
        "options": [
          "2 000.",
          "3 500.",
          "4 000.",
          "6 000.",
          "8 000."
        ],
        "correctIndex": 4,
        "explanation": "Utilizando a regra de três composta: Máquinas, Dias e Horas/dia são diretamente proporcionais ao número de Peças. (5/10) × (5/10) × (5/10) = 500/x &rArr; 125/1000 = 500/x &rArr; 1/8 = 500/x &rArr; x = 4 000 peças.",
        "contentHtml": "<strong>Questão 10 (INÉDITA)</strong><br><br>\n                    Numa empresa de grande porte, sabe-se que 5 máquinas, todas de igual eficiência, são capazes de produzir 500 peças de um determinado produto em 5 dias, se operarem durante 5 horas por dia. Olhando agora essa situação, em que 10 máquinas iguais às primeiras operassem 10 horas por dia, durante 10 dias, conclui-se que o número de peças produzidas seria igual a",
        "optionsHtml": [
          "2 000.",
          "3 500.",
          "4 000.",
          "6 000.",
          "8 000."
        ],
        "explanationHtml": "Utilizando a regra de três composta:<br>Máquinas, Dias e Horas/dia são diretamente proporcionais ao número de Peças.<br>(5/10) × (5/10) × (5/10) = 500/x &rArr; 125/1000 = 500/x &rArr; 1/8 = 500/x &rArr; x = 4 000 peças."
      }
    ],
    "simulado1": [
      {
        "id": "unit2_simulado1_1",
        "text": "Questão 1 (ENEM) Boliche é um jogo em que se arremessa uma bola sobre uma pista para atingir dez pinos, dispostos em uma formação de base triangular, buscando derrubar o maior número de pinos. A razão entre o total de vezes em que o jogador derruba todos os pinos e o número de jogadas determina seu desempenho. Em uma disputa entre os cinco jogadores, foram obtidos os seguintes resultados: JOGADOR I Derrubou todos os pinos 50 vezes em 85 jogadas. JOGADOR II Derrubou todos os pinos 40 vezes em 65 jogadas. JOGADOR III Derrubou todos os pinos 20 vezes em 65 jogadas. JOGADOR IV Derrubou todos os pinos 30 vezes em 40 jogadas. JOGADOR V Derrubou todos os pinos 48 vezes em 90 jogadas. Qual desses jogadores apresentou maior desempenho?",
        "options": [
          "I.",
          "II.",
          "III.",
          "IV.",
          "V."
        ],
        "correctIndex": 3,
        "explanation": "Para comparar os desempenhos, avaliamos as frações ou valores decimais aproximados de cada razão (sucessos/jogadas): Jogador I: 50/85 ≈ 0,588; Jogador II: 40/65 ≈ 0,615; Jogador III: 20/65 ≈ 0,307; Jogador IV: 30/40 = 0,750; Jogador V: 48/90 ≈ 0,533. O maior desempenho é o do Jogador IV.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                    Boliche é um jogo em que se arremessa uma bola sobre uma pista para atingir dez pinos, dispostos em uma formação de base triangular, buscando derrubar o maior número de pinos. A razão entre o total de vezes em que o jogador derruba todos os pinos e o número de jogadas determina seu desempenho. Em uma disputa entre os cinco jogadores, foram obtidos os seguintes resultados:<br><br>\n                    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                        <tbody>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR I</td><td style=\"padding: 10px;\">Derrubou todos os pinos 50 vezes em 85 jogadas.</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR II</td><td style=\"padding: 10px;\">Derrubou todos os pinos 40 vezes em 65 jogadas.</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR III</td><td style=\"padding: 10px;\">Derrubou todos os pinos 20 vezes em 65 jogadas.</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR IV</td><td style=\"padding: 10px;\">Derrubou todos os pinos 30 vezes em 40 jogadas.</td></tr>\n                            <tr style=\"border-bottom: 1px solid #edf2f7;\"><td style=\"padding: 10px; font-weight: bold;\">JOGADOR V</td><td style=\"padding: 10px;\">Derrubou todos os pinos 48 vezes em 90 jogadas.</td></tr>\n                        </tbody>\n                    </table>\n                    Qual desses jogadores apresentou maior desempenho?",
        "optionsHtml": [
          "I.",
          "II.",
          "III.",
          "IV.",
          "V."
        ],
        "explanationHtml": "Para comparar os desempenhos, avaliamos as frações ou valores decimais aproximados de cada razão (sucessos/jogadas): Jogador I: 50/85 ≈ 0,588; Jogador II: 40/65 ≈ 0,615; Jogador III: 20/65 ≈ 0,307; Jogador IV: 30/40 = 0,750; Jogador V: 48/90 ≈ 0,533. O maior desempenho é o do Jogador IV."
      },
      {
        "id": "unit2_simulado1_2",
        "text": "Questão 2 (ENEM) Durante uma epidemia de uma gripe viral, o secretário de saúde de um município comprou 16 galões de álcool em gel, com 4 litros de capacidade cada um, para distribuir igualmente em recipientes para 10 escolas públicas do município. O fornecedor dispõe à venda diversos tipos de recipientes, com suas respectivas capacidades listadas: • Recipiente I: 0,125 litro. • Recipiente II: 0,250 litro. • Recipiente III: 0,320 litro. • Recipiente IV: 0,500 litro. • Recipiente V: 0,800 litro. O secretário de saúde comprará recipientes de um mesmo tipo, de modo a instalar 20 deles em cada escola, abastecidos com álcool em gel na sua capacidade máxima, de forma a utilizar todo o gel dos galões de uma só vez. Que tipo de recipiente o secretário de saúde deve comprar?",
        "options": [
          "I.",
          "II.",
          "III.",
          "IV.",
          "V."
        ],
        "correctIndex": 2,
        "explanation": "Total de álcool disponível: 16 galões × 4 litros = 64 litros. Total de recipientes a serem instalados: 10 escolas × 20 recipientes = 200 recipientes. Dividindo a capacidade total pelo número de recipientes: 64 litros / 200 = 0,320 litro. Portanto, deve ser comprado o Recipiente III.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                    Durante uma epidemia de uma gripe viral, o secretário de saúde de um município comprou 16 galões de álcool em gel, com 4 litros de capacidade cada um, para distribuir igualmente em recipientes para 10 escolas públicas do município. O fornecedor dispõe à venda diversos tipos de recipientes, com suas respectivas capacidades listadas:<br><br>\n                    • Recipiente I: 0,125 litro.<br>\n                    • Recipiente II: 0,250 litro.<br>\n                    • Recipiente III: 0,320 litro.<br>\n                    • Recipiente IV: 0,500 litro.<br>\n                    • Recipiente V: 0,800 litro.<br><br>\n                    O secretário de saúde comprará recipientes de um mesmo tipo, de modo a instalar 20 deles em cada escola, abastecidos com álcool em gel na sua capacidade máxima, de forma a utilizar todo o gel dos galões de uma só vez.<br><br>\n                    Que tipo de recipiente o secretário de saúde deve comprar?",
        "optionsHtml": [
          "I.",
          "II.",
          "III.",
          "IV.",
          "V."
        ],
        "explanationHtml": "Total de álcool disponível: 16 galões × 4 litros = 64 litros. Total de recipientes a serem instalados: 10 escolas × 20 recipientes = 200 recipientes. Dividindo a capacidade total pelo número de recipientes: 64 litros / 200 = 0,320 litro. Portanto, deve ser comprado o Recipiente III."
      },
      {
        "id": "unit2_simulado1_3",
        "text": "Questão 3 (INÉDITA) Brasil é líder no ranking dos países com maior incidência de raios O físico Daniel Ângelo, do grupo Ciência em Show, explica como os raios são produzidos: eles se formam na atmosfera por conta do atrito entre as partículas de gelo. Como a zona tropical é a que tem mais nuvens do tipo que produz raios, e como o Brasil é o maior país nessa região da Terra, é aqui onde caem mais raios. Dos 3,15 bilhões de raios que caem na Terra durante um ano, 100 milhões deles vêm cair no Brasil. A razão entre o número de raios que caem no Brasil e o número de raios que caem na Terra é igual a",
        "options": [
          "1 35",
          "2 63",
          "10 63",
          "5 61",
          "63 5"
        ],
        "correctIndex": 2,
        "explanation": "Escrevemos os valores na mesma unidade (milhões): 100 milhões no Brasil para 3.150 milhões na Terra (pois 3,15 bilhões = 3.150 milhões). Montando a razão: 100 / 3150. Simplificando por 10, cortando os zeros, obtemos 10/63.",
        "contentHtml": "<strong>Questão 3 (INÉDITA)</strong><br><br>\n                    <strong>Brasil é líder no ranking dos países com maior incidência de raios</strong><br><br>\n                    O físico Daniel Ângelo, do grupo Ciência em Show, explica como os raios são produzidos: eles se formam na atmosfera por conta do atrito entre as partículas de gelo. Como a zona tropical é a que tem mais nuvens do tipo que produz raios, e como o Brasil é o maior país nessa região da Terra, é aqui onde caem mais raios.<br><br>\n                    Dos 3,15 bilhões de raios que caem na Terra durante um ano, 100 milhões deles vêm cair no Brasil.<br><br>\n                    A razão entre o número de raios que caem no Brasil e o número de raios que caem na Terra é igual a",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">1</span><span>35</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">2</span><span>63</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">10</span><span>63</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">5</span><span>61</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">63</span><span>5</span></div>"
        ],
        "explanationHtml": "Escrevemos os valores na mesma unidade (milhões): 100 milhões no Brasil para 3.150 milhões na Terra (pois 3,15 bilhões = 3.150 milhões). Montando a razão: 100 / 3150. Simplificando por 10, cortando os zeros, obtemos 10/63."
      },
      {
        "id": "unit2_simulado1_4",
        "text": "Questão 4 (INÉDITA) Num bairro da cidade de João Pessoa-PB, foi realizada uma campanha de conscientização para que não se jogue óleo no ralo da pia. Cada litro de óleo jogado no ralo polui rios e mares, além de entupir tubulações. Uma das alternativas apresentadas pelos moradores da comunidade foi fazer sabão com esse resíduo. A cada 4 litros de óleo é possível fazer 10 kg de sabão. Um morador que conseguiu juntar 10 litros de óleo, além de preservar o meio ambiente, consegue produzir",
        "options": [
          "10 kg de sabão.",
          "15 kg de sabão.",
          "20 kg de sabão.",
          "25 kg de sabão.",
          "30 kg de sabão."
        ],
        "correctIndex": 3,
        "explanation": "Montando a proporção: se 4 litros produzem 10 kg, cada 1 litro produz 10 / 4 = 2,5 kg de sabão. Multiplicando pelo total arrecadado: 10 litros × 2,5 kg/litro = 25 kg de sabão.",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n                    Num bairro da cidade de João Pessoa-PB, foi realizada uma campanha de conscientização para que não se jogue óleo no ralo da pia. Cada litro de óleo jogado no ralo polui rios e mares, além de entupir tubulações. Uma das alternativas apresentadas pelos moradores da comunidade foi fazer sabão com esse resíduo. A cada 4 litros de óleo é possível fazer 10 kg de sabão. Um morador que conseguiu juntar 10 litros de óleo, além de preservar o meio ambiente, consegue produzir",
        "optionsHtml": [
          "10 kg de sabão.",
          "15 kg de sabão.",
          "20 kg de sabão.",
          "25 kg de sabão.",
          "30 kg de sabão."
        ],
        "explanationHtml": "Montando a proporção: se 4 litros produzem 10 kg, cada 1 litro produz 10 / 4 = 2,5 kg de sabão. Multiplicando pelo total arrecadado: 10 litros × 2,5 kg/litro = 25 kg de sabão."
      },
      {
        "id": "unit2_simulado1_5",
        "text": "Questão 5 (ENEM) Nos últimos cinco anos, 32 mil mulheres de 20 a 24 anos foram internadas nos hospitais do SUS por causa de AVC. Entre os homens da mesma faixa etária, houve 28 mil internações pelo mesmo motivo. Suponha que, nos próximos cinco anos, haja um acréscimo de 8 mil internações de mulheres e que o acréscimo de internações de homens por AVC ocorra na mesma proporção. De acordo com as informações dadas, o número de homens que seriam internados por AVC, nos próximos cinco anos, corresponderia a",
        "options": [
          "4 mil.",
          "9 mil.",
          "21 mil.",
          "35 mil.",
          "39 mil."
        ],
        "correctIndex": 3,
        "explanation": "A razão do acréscimo feminino é de 8 mil sobre as 32 mil internações iniciais (8/32 = 1/4 ou 25%). Mantendo a mesma proporção para os homens, calculamos o acréscimo deles: 28 mil × 25% = 7 mil. Portanto, o total de homens internados nos próximos cinco anos será de 28 mil + 7 mil = 35 mil.",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                    Nos últimos cinco anos, 32 mil mulheres de 20 a 24 anos foram internadas nos hospitais do SUS por causa de AVC. Entre os homens da mesma faixa etária, houve 28 mil internações pelo mesmo motivo.<br>\n                    Suponha que, nos próximos cinco anos, haja um acréscimo de 8 mil internações de mulheres e que o acréscimo de internações de homens por AVC ocorra na mesma proporção.<br><br>\n                    De acordo com as informações dadas, o número de homens que seriam internados por AVC, nos próximos cinco anos, corresponderia a",
        "optionsHtml": [
          "4 mil.",
          "9 mil.",
          "21 mil.",
          "35 mil.",
          "39 mil."
        ],
        "explanationHtml": "A razão do acréscimo feminino é de 8 mil sobre as 32 mil internações iniciais (8/32 = 1/4 ou 25%). Mantendo a mesma proporção para os homens, calculamos o acréscimo deles: 28 mil × 25% = 7 mil. Portanto, o total de homens internados nos próximos cinco anos será de 28 mil + 7 mil = 35 mil."
      },
      {
        "id": "unit2_simulado1_6",
        "text": "Questão 6 (INÉDITA) O presidente de uma empresa resolveu premiar os três vendedores mais eficientes do ano com a quantia de R$ 13 500,00 (que será distribuída de forma diretamente proporcional ao número de pontos obtidos por cada um na avaliação do ano). O vencedor, com 45 pontos, recebeu R$ 6 750,00 e o número de pontos do segundo colocado foi igual a 27. O número de pontos a menos que o terceiro colocado conseguiu em relação ao segundo colocado foi",
        "options": [
          "8.",
          "9.",
          "10.",
          "11.",
          "12."
        ],
        "correctIndex": 1,
        "explanation": "Se a divisão é direta, dividimos o prêmio pelos pontos para achar a constante: 6750 / 45 = R$ 150 por ponto. O segundo colocado tem 27 pontos, logo recebeu 27 × 150 = R$ 4.050. O que sobrou para o terceiro foi 13500 - 6750 - 4050 = R$ 2.700. Pontos do terceiro: 2700 / 150 = 18 pontos. A diferença de pontos entre o segundo e o terceiro é de 27 - 18 = 9.",
        "contentHtml": "<strong>Questão 6 (INÉDITA)</strong><br><br>\n                    O presidente de uma empresa resolveu premiar os três vendedores mais eficientes do ano com a quantia de R$ 13 500,00 (que será distribuída de forma diretamente proporcional ao número de pontos obtidos por cada um na avaliação do ano). O vencedor, com 45 pontos, recebeu R$ 6 750,00 e o número de pontos do segundo colocado foi igual a 27. O número de pontos a menos que o terceiro colocado conseguiu em relação ao segundo colocado foi",
        "optionsHtml": [
          "8.",
          "9.",
          "10.",
          "11.",
          "12."
        ],
        "explanationHtml": "Se a divisão é direta, dividimos o prêmio pelos pontos para achar a constante: 6750 / 45 = R$ 150 por ponto. O segundo colocado tem 27 pontos, logo recebeu 27 × 150 = R$ 4.050. O que sobrou para o terceiro foi 13500 - 6750 - 4050 = R$ 2.700. Pontos do terceiro: 2700 / 150 = 18 pontos. A diferença de pontos entre o segundo e o terceiro é de 27 - 18 = 9."
      },
      {
        "id": "unit2_simulado1_7",
        "text": "Questão 7 (ENEM ADAPTADA) A relação da resistência elétrica com as dimensões do condutor foi estudada por um grupo de cientistas por meio de vários experimentos de eletricidade. Eles verificaram que existe proporcionalidade entre: • resistência (R) e comprimento (l), dada a mesma secção transversal (A); • resistência (R) e área da secção transversal (A), dado o mesmo comprimento (l) e • comprimento (l) e área da secção transversal (A), dada a mesma resistência (R). Considerando os resistores como fios, pode-se exemplificar o estudo das grandezas que influem na resistência elétrica utilizando as figuras seguintes. Disponível em: www.efeitojoule.com. Acesso em: abr. 2010 (adaptado). As figuras mostram que as proporcionalidades tentes entre resistência (R) e comprimento (l), resistência (R) e área da seção transversal (A), e entre comprimento (l) e área da seção transversal (A) são, respectivamente,",
        "options": [
          "direta, direta e direta.",
          "direta, direta e inversa.",
          "direta, inversa e direta.",
          "inversa, direta e direta.",
          "inversa, direta e inversa."
        ],
        "correctIndex": 2,
        "explanation": "Analisando as figuras: aumentando o comprimento, a resistência aumenta (direta); aumentando a área da seção transversal, a resistência diminui (inversa); para manter a mesma resistência, se aumentamos o comprimento, precisamos também aumentar a área (direta).",
        "contentHtml": "<strong>Questão 7 (ENEM ADAPTADA)</strong><br><br>\n                    A relação da resistência elétrica com as dimensões do condutor foi estudada por um grupo de cientistas por meio de vários experimentos de eletricidade. Eles verificaram que existe proporcionalidade entre:<br><br>\n                    • resistência (R) e comprimento (l), dada a mesma secção transversal (A);<br>\n                    • resistência (R) e área da secção transversal (A), dado o mesmo comprimento (l) e<br>\n                    • comprimento (l) e área da secção transversal (A), dada a mesma resistência (R).<br><br>\n                    Considerando os resistores como fios, pode-se exemplificar o estudo das grandezas que influem na resistência elétrica utilizando as figuras seguintes.<br><br>\n                    <img src=\"/imagens/joule.jpeg\" alt=\"Esquema de fios condutores\" class=\"img-center\"><br>\n                    Disponível em: www.efeitojoule.com. Acesso em: abr. 2010 (adaptado).<br><br>\n                    As figuras mostram que as proporcionalidades tentes entre resistência (R) e comprimento (l), resistência (R) e área da seção transversal (A), e entre comprimento (l) e área da seção transversal (A) são, respectivamente,",
        "optionsHtml": [
          "direta, direta e direta.",
          "direta, direta e inversa.",
          "direta, inversa e direta.",
          "inversa, direta e direta.",
          "inversa, direta e inversa."
        ],
        "explanationHtml": "Analisando as figuras: aumentando o comprimento, a resistência aumenta (direta); aumentando a área da seção transversal, a resistência diminui (inversa); para manter a mesma resistência, se aumentamos o comprimento, precisamos também aumentar a área (direta)."
      },
      {
        "id": "unit2_simulado1_8",
        "text": "Questão 8 (ENEM) Uma mãe correu à bula para verificar a dosagem de um remédio que precisava dar a seu filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2 kg de massa corporal a cada 8 hours. Se a mãe administrou corretamente 30 gotas do remédio a seu filho a cada 8 horas, then a massa corporal dele é de",
        "options": [
          "12 kg.",
          "16 kg.",
          "24 kg.",
          "36 kg.",
          "75 kg."
        ],
        "correctIndex": 0,
        "explanation": "Montando uma regra de três simples direta: 5 gotas estão para 2 kg, assim como 30 gotas estão para x kg. 5/2 = 30/x &rArr; 5x = 60 &rArr; x = 12 kg.",
        "contentHtml": "<strong>Questão 8 (ENEM)</strong><br><br>\n                    Uma mãe correu à bula para verificar a dosagem de um remédio que precisava dar a seu filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2 kg de massa corporal a cada 8 hours.<br><br>\n                    Se a mãe administrou corretamente 30 gotas do remédio a seu filho a cada 8 horas, then a massa corporal dele é de",
        "optionsHtml": [
          "12 kg.",
          "16 kg.",
          "24 kg.",
          "36 kg.",
          "75 kg."
        ],
        "explanationHtml": "Montando uma regra de três simples direta: 5 gotas estão para 2 kg, assim como 30 gotas estão para x kg. <br>5/2 = 30/x &rArr; 5x = 60 &rArr; x = 12 kg."
      }
    ],
    "simulado2": [
      {
        "id": "unit2_simulado2_1",
        "text": "Questão 1 (ENEM) Um dos grandes problemas da poluição dos mananciais (rios, córregos e outros) ocorre pelo hábito de jogar óleo utilizado em frituras nos encanamentos que estão interligados com o sistema de esgoto. Se isso ocorrer, cada 10 litros de óleo poderão contaminar 10 milhões (10 7 ) de litros de água potável. Manual de etiquette. Parte integrante das revistas Veja (ed. 2055), Cláudia (ed. 555), National Geographic ed. 93) e Nova Escola (ed. 208) (adaptado). Suponha que todas as famílias de uma cidade descartem os óleos de frituras através dos encanamentos e consumam 1 000 litros de óleo em frituras por semana. Qual seria, em litros, a quantidade de água potável contaminada por semana nessa cidade?",
        "options": [
          "10 2",
          "10 3",
          "10 4",
          "10 6",
          "10 9"
        ],
        "correctIndex": 4,
        "explanation": "A proporção é de 10 7 litros de água poluída para cada 10 litros de óleo (o que simplifica para 10 6 litros de água por litro de óleo). Para um consumo de 1 000 litros (10 3 litros) de óleo: 10 3 × 10 6 = 10 9 litros de água contaminada.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                    Um dos grandes problemas da poluição dos mananciais (rios, córregos e outros) ocorre pelo hábito de jogar óleo utilizado em frituras nos encanamentos que estão interligados com o sistema de esgoto. Se isso ocorrer, cada 10 litros de óleo poderão contaminar 10 milhões (10<sup>7</sup>) de litros de água potável.<br>\n                    <div style=\"font-size: 0.8rem; color: #718096; margin-bottom: 15px;\">Manual de etiquette. Parte integrante das revistas Veja (ed. 2055), Cláudia (ed. 555), National Geographic ed. 93) e Nova Escola (ed. 208) (adaptado).</div>\n                    Suponha que todas as famílias de uma cidade descartem os óleos de frituras através dos encanamentos e consumam 1 000 litros de óleo em frituras por semana. Qual seria, em litros, a quantidade de água potável contaminada por semana nessa cidade?",
        "optionsHtml": [
          "10<sup>2</sup>",
          "10<sup>3</sup>",
          "10<sup>4</sup>",
          "10<sup>6</sup>",
          "10<sup>9</sup>"
        ],
        "explanationHtml": "A proporção é de 10<sup>7</sup> litros de água poluída para cada 10 litros de óleo (o que simplifica para 10<sup>6</sup> litros de água por litro de óleo). Para um consumo de 1 000 litros (10<sup>3</sup> litros) de óleo: 10<sup>3</sup> × 10<sup>6</sup> = 10<sup>9</sup> litros de água contaminada."
      },
      {
        "id": "unit2_simulado2_2",
        "text": "Questão 2 (ENEM ADAPTADA) Muitas medidas podem ser tomadas em nossas casas visando à utilização racional de energia elétrica. Isso deve ser uma atitude diária de cidadania. Uma delas pode ser a redução do tempo no banho. Um chuveiro com potência de 4 800 kWh consome 4,8 kW por hora. Uma pessoa que toma dois banhos diariamente, de 10 minutos cada, consumirá, em sete dias, quantos kW?",
        "options": [
          "0,8.",
          "1,6.",
          "5,6.",
          "11,2.",
          "33,6."
        ],
        "correctIndex": 3,
        "explanation": "Cada dia possui 2 banhos de 10 minutos, totalizando 20 minutes por dia. Em 7 dias, o tempo total é de 7 × 20 = 140 minutos. Convertendo para horas: 140 / 60 = 7/3 horas. Como o consumo é de 4,8 kW por hora: Consumo = 4,8 × (7 / 3) = 1,6 × 7 = 11,2 kW.",
        "contentHtml": "<strong>Questão 2 (ENEM ADAPTADA)</strong><br><br>\n                    Muitas medidas podem ser tomadas em nossas casas visando à utilização racional de energia elétrica. Isso deve ser uma atitude diária de cidadania. Uma delas pode ser a redução do tempo no banho. Um chuveiro com potência de 4 800 kWh consome 4,8 kW por hora. Uma pessoa que toma dois banhos diariamente, de 10 minutos cada, consumirá, em sete dias, quantos kW?",
        "optionsHtml": [
          "0,8.",
          "1,6.",
          "5,6.",
          "11,2.",
          "33,6."
        ],
        "explanationHtml": "Cada dia possui 2 banhos de 10 minutos, totalizando 20 minutes por dia. Em 7 dias, o tempo total é de 7 × 20 = 140 minutos. Convertendo para horas: 140 / 60 = 7/3 horas. Como o consumo é de 4,8 kW por hora: Consumo = 4,8 × (7 / 3) = 1,6 × 7 = 11,2 kW."
      },
      {
        "id": "unit2_simulado2_3",
        "text": "Questão 3 (INÉDITA) Uma piscina tem a forma de um paralelepípedo retângulo de 10 m de largura, 15 m de comprimento e 2 m de profundidade. Para tratar a água dessa piscina, é preciso adicionar 1 kg de certo produto químico a cada 2 500 litros de água. Estando ela completamente cheia de água, e sabendo-se que 1 m³ equivale a 1 000 litros, a quantidade em quilos do produto químico que deverá ser usada para o tratamento é",
        "options": [
          "12 kg.",
          "60 kg.",
          "120 kg.",
          "600 kg.",
          "1.200 kg."
        ],
        "correctIndex": 2,
        "explanation": "Primeiro calculamos o volume da piscina: 10m × 15m × 2m = 300 m³. Convertendo para litros: 300 × 1000 = 300.000 litros. Sabendo que é usado 1 kg a cada 2.500 litros: 300.000 / 2.500 = 120 kg do produto.",
        "contentHtml": "<strong>Questão 3 (INÉDITA)</strong><br><br>\n                    Uma piscina tem a forma de um paralelepípedo retângulo de 10 m de largura, 15 m de comprimento e 2 m de profundidade. Para tratar a água dessa piscina, é preciso adicionar 1 kg de certo produto químico a cada 2 500 litros de água. Estando ela completamente cheia de água, e sabendo-se que 1 m³ equivale a 1 000 litros, a quantidade em quilos do produto químico que deverá ser usada para o tratamento é",
        "optionsHtml": [
          "12 kg.",
          "60 kg.",
          "120 kg.",
          "600 kg.",
          "1.200 kg."
        ],
        "explanationHtml": "Primeiro calculamos o volume da piscina: 10m × 15m × 2m = 300 m³. Convertendo para litros: 300 × 1000 = 300.000 litros. Sabendo que é usado 1 kg a cada 2.500 litros: 300.000 / 2.500 = 120 kg do produto."
      },
      {
        "id": "unit2_simulado2_4",
        "text": "Questão 4 (INÉDITA) A pressão P que o vento exerce sobre um barco à vela cresce proporcionalmente com a área A da superfície da vela e com o quadrado da velocidade v do vento. Denominando k como sendo a constante positiva de proporcionalidade, tem-se que a pressão P é dada por",
        "options": [
          "P = k • &radic;A • v",
          "P = k • A • &radic;v",
          "P = k • A • v",
          "P = k • A • v 2",
          "P = k • A 2 • v"
        ],
        "correctIndex": 3,
        "explanation": "Diretamente proporcional significa que as grandezas multiplicam a constante k. Como cresce com a área (A) e com o quadrado da velocidade (v 2 ), a equação correta é P = k • A • v 2 .",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n                    A pressão P que o vento exerce sobre um barco à vela cresce proporcionalmente com a área A da superfície da vela e com o quadrado da velocidade v do vento. Denominando k como sendo a constante positiva de proporcionalidade, tem-se que a pressão P é dada por",
        "optionsHtml": [
          "P = k • &radic;A • v",
          "P = k • A • &radic;v",
          "P = k • A • v",
          "P = k • A • v<sup>2</sup>",
          "P = k • A<sup>2</sup> • v"
        ],
        "explanationHtml": "Diretamente proporcional significa que as grandezas multiplicam a constante k. Como cresce com a área (A) e com o quadrado da velocidade (v<sup>2</sup>), a equação correta é P = k • A • v<sup>2</sup>."
      },
      {
        "id": "unit2_simulado2_5",
        "text": "Questão 5 (INÉDITA) A fórmula usada para o cálculo do IMC (Índice de Massa Corporal) é dada pela massa (m) do indivíduo, em kg, dividida pelo quadrado da sua altura (h), em metros. Dessa forma, as quantidades relativas a",
        "options": [
          "IMC e h 2 são diretamente proporcionais.",
          "IMC e m são inversamente proporcionais.",
          "m e h são diretamente profissionais.",
          "m e h são inversamente proporcionais.",
          "m e h 2 são diretamente proporcionais."
        ],
        "correctIndex": 4,
        "explanation": "A fórmula é IMC = m / h 2 . Isolando a massa, temos m = IMC • h 2 . Fixando o IMC como uma constante para análise da relação isolada da estrutura, m e h 2 variam no mesmo sentido multiplicativo direto.",
        "contentHtml": "<strong>Questão 5 (INÉDITA)</strong><br><br>\n                    A fórmula usada para o cálculo do IMC (Índice de Massa Corporal) é dada pela massa (m) do indivíduo, em kg, dividida pelo quadrado da sua altura (h), em metros. Dessa forma, as quantidades relativas a",
        "optionsHtml": [
          "IMC e h<sup>2</sup> são diretamente proporcionais.",
          "IMC e m são inversamente proporcionais.",
          "m e h são diretamente profissionais.",
          "m e h são inversamente proporcionais.",
          "m e h<sup>2</sup> são diretamente proporcionais."
        ],
        "explanationHtml": "A fórmula é IMC = m / h<sup>2</sup>. Isolando a massa, temos m = IMC • h<sup>2</sup>. Fixando o IMC como uma constante para análise da relação isolada da estrutura, m e h<sup>2</sup> variam no mesmo sentido multiplicativo direto."
      },
      {
        "id": "unit2_simulado2_6",
        "text": "Questão 6 (ENEM) No depósito de uma biblioteca há caixas contendo folhas de papel de 0,1 mm de espessura, e em cada uma delas estão anotados 10 títulos de livros diferentes. Essas folhas foram empilhadas formando uma torre vertical de 1 m de altura. Qual a representação, em potência de 10, correspondente à quantidade de títulos de livros registrados nesse empilhamento?",
        "options": [
          "10 2",
          "10 4",
          "10 5",
          "10 6",
          "10 7"
        ],
        "correctIndex": 2,
        "explanation": "Primeiro convertemos a altura da torre para milímetros: 1 m = 1 000 mm. O número de folhas é 1 000 mm / 0,1 mm = 10 000 folhas (10 4 ). Como cada folha possui 10 títulos, o total de títulos é 10 000 × 10 = 100 000, que equivale a 10 5 .",
        "contentHtml": "<strong>Questão 6 (ENEM)</strong><br><br>\n                    No depósito de uma biblioteca há caixas contendo folhas de papel de 0,1 mm de espessura, e em cada uma delas estão anotados 10 títulos de livros diferentes. Essas folhas foram empilhadas formando uma torre vertical de 1 m de altura.<br><br>\n                    Qual a representação, em potência de 10, correspondente à quantidade de títulos de livros registrados nesse empilhamento?",
        "optionsHtml": [
          "10<sup>2</sup>",
          "10<sup>4</sup>",
          "10<sup>5</sup>",
          "10<sup>6</sup>",
          "10<sup>7</sup>"
        ],
        "explanationHtml": "Primeiro convertemos a altura da torre para milímetros: 1 m = 1 000 mm. <br>O número de folhas é 1 000 mm / 0,1 mm = 10 000 folhas (10<sup>4</sup>). <br>Como cada folha possui 10 títulos, o total de títulos é 10 000 × 10 = 100 000, que equivale a 10<sup>5</sup>."
      },
      {
        "id": "unit2_simulado2_7",
        "text": "Questão 7 (ENEM) Pneus usados geralmente são descartados de forma inadequada, favorecendo a proliferação de insetos e roedores e provocando sérios problemas de saúde pública. Estima-se que no Brasil, a cada ano, sejam descartados 20 milhões de pneus usados. Como uma alternativa para dar uma destinação final a estes pneus, a Petrobrás, em sua unidade de São Mateus do Sul, no Paraná, desenvolveu um processo de obtenção de combustível a partir da mistura dos pneus com xisto. Esse procedimento permite a partir de 1 tonelada de pneu, um rendimento de cerca de 530 kg de óleo. Considerando que uma tonelada corresponde em média a 200 pneus, se todos os pneus descartados anualmente fossem utilizados no processo de obtenção de combustível pela mistura com xisto, seriam então produzidas",
        "options": [
          "5,3 mil toneladas de óleo.",
          "53 mil toneladas de óleo.",
          "530 mil toneladas de óleo.",
          "5,3 milhões de toneladas de óleo.",
          "530 milhões de toneladas de óleo."
        ],
        "correctIndex": 1,
        "explanation": "Total de pneus: 20 000 000. Como 200 pneus equivalem a 1 tonelada, temos: 20 000 000 / 200 = 100 000 toneladas de pneus. Cada tonelada rende 530 kg (0,53 toneladas) de óleo. Logo, 100 000 × 0,53 = 53 000 toneladas (ou 53 mil toneladas) de óleo.",
        "contentHtml": "<strong>Questão 7 (ENEM)</strong><br><br>\n                    Pneus usados geralmente são descartados de forma inadequada, favorecendo a proliferação de insetos e roedores e provocando sérios problemas de saúde pública. Estima-se que no Brasil, a cada ano, sejam descartados 20 milhões de pneus usados. Como uma alternativa para dar uma destinação final a estes pneus, a Petrobrás, em sua unidade de São Mateus do Sul, no Paraná, desenvolveu um processo de obtenção de combustível a partir da mistura dos pneus com xisto. Esse procedimento permite a partir de 1 tonelada de pneu, um rendimento de cerca de 530 kg de óleo. Considerando que uma tonelada corresponde em média a 200 pneus, se todos os pneus descartados anualmente fossem utilizados no processo de obtenção de combustível pela mistura com xisto, seriam então produzidas",
        "optionsHtml": [
          "5,3 mil toneladas de óleo.",
          "53 mil toneladas de óleo.",
          "530 mil toneladas de óleo.",
          "5,3 milhões de toneladas de óleo.",
          "530 milhões de toneladas de óleo."
        ],
        "explanationHtml": "Total de pneus: 20 000 000. Como 200 pneus equivalem a 1 tonelada, temos: 20 000 000 / 200 = 100 000 toneladas de pneus. <br>Cada tonelada rende 530 kg (0,53 toneladas) de óleo. <br>Logo, 100 000 × 0,53 = 53 000 toneladas (ou 53 mil toneladas) de óleo."
      },
      {
        "id": "unit2_simulado2_8",
        "text": "Questão 8 (ENEM) A resistência mecânica S de uma viga de madeira, em forma de um paralelepípedo retângulo, é diretamente proporcional à sua largura (b) e ao quadrado de sua altura (d) e inversamente proporcional ao quadrado da distância entre os suportes da viga, que coincide com o seu comprimento (x), conforme ilustra a figura. A constante de proporcionalidade k é chamada de resistência da viga. A expressão que traduz a resistência S dessa viga de madeira é",
        "options": [
          "k • b • d 2 x 2",
          "k • b • d x 2",
          "k • b • d 2 x",
          "k • b 2 • d x 2",
          "k • b • 2d 2x"
        ],
        "correctIndex": 0,
        "explanation": "As grandezas diretamente proporcionais (b e d 2 ) multiplicam a constante k no numerador. A grandeza inversamente proporcional (x 2 ) vai para o adenocarcinoma. Portanto: S = (k • b • d 2 ) / x 2 .",
        "contentHtml": "<strong>Questão 8 (ENEM)</strong><br><br>\n                    A resistência mecânica S de uma viga de madeira, em forma de um paralelepípedo retângulo, é diretamente proporcional à sua largura (b) e ao quadrado de sua altura (d) e inversamente proporcional ao quadrado da distância entre os suportes da viga, que coincide com o seu comprimento (x), conforme ilustra a figura. A constante de proporcionalidade k é chamada de resistência da viga.<br><br>\n                    <img src=\"/imagens/madeira.jpeg\" alt=\"Dimensões da viga\" class=\"img-center\"><br>\n                    A expressão que traduz a resistência S dessa viga de madeira é",
        "optionsHtml": [
          "<div class=\"frac\"><span class=\"nominator\">k • b • d<sup>2</sup></span><span>x<sup>2</sup></span></div>",
          "<div class=\"frac\"><span class=\"nominator\">k • b • d</span><span>x<sup>2</sup></span></div>",
          "<div class=\"frac\"><span class=\"nominator\">k • b • d<sup>2</sup></span><span>x</span></div>",
          "<div class=\"frac\"><span class=\"nominator\">k • b<sup>2</sup> • d</span><span>x<sup>2</sup></span></div>",
          "<div class=\"frac\"><span class=\"nominator\">k • b • 2d</span><span>2x</span></div>"
        ],
        "explanationHtml": "As grandezas diretamente proporcionais (b e d<sup>2</sup>) multiplicam a constante k no numerador. A grandeza inversamente proporcional (x<sup>2</sup>) vai para o adenocarcinoma. Portanto: S = (k • b • d<sup>2</sup>) / x<sup>2</sup>."
      }
    ]
  },
  "unit3": {
    "avaliacao": [
      {
        "id": "unit3_avaliacao_1",
        "text": "Questão 1 (ENEM) No dia 12 de janeiro de 2010, o governo da Venezuela adotou um plano de racionamento de energia que previa cortes no fornecimento em todo o país. O ministro da Energia afirmou que uma das formas mais eficazes de se economizar energia nos domicílios seria o uso de lâmpadas que consomem 20% menos da energia consumida por lâmpadas normais. Em uma residência, o consumo mensal de energia proveniente do uso de lâmpadas comuns é de 63 kWh. Se todas as lâmpadas dessa residência forem trocadas pelas lâmpadas econômicas, esse consumo passará a ser de, aproximadamente,",
        "options": [
          "9 kWh.",
          "11 kWh.",
          "22 kWh.",
          "35 kWh.",
          "50 kWh."
        ],
        "correctIndex": 4,
        "explanation": "20% de 63 = 12,6. Então: 63 - 12,6 = 50,4 kWh. Aproximadamente 50 kWh.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                No dia 12 de janeiro de 2010, o governo da Venezuela adotou um plano de racionamento de energia que previa cortes no fornecimento em todo o país. O ministro da Energia afirmou que uma das formas mais eficazes de se economizar energia nos domicílios seria o uso de lâmpadas que consomem 20% menos da energia consumida por lâmpadas normais. Em uma residência, o consumo mensal de energia proveniente do uso de lâmpadas comuns é de 63 kWh. Se todas as lâmpadas dessa residência forem trocadas pelas lâmpadas econômicas, esse consumo passará a ser de, aproximadamente,",
        "optionsHtml": [
          "9 kWh.",
          "11 kWh.",
          "22 kWh.",
          "35 kWh.",
          "50 kWh."
        ],
        "explanationHtml": "20% de 63 = 12,6. Então: 63 - 12,6 = 50,4 kWh. Aproximadamente 50 kWh."
      },
      {
        "id": "unit3_avaliacao_2",
        "text": "Questão 2 (ENEM) Devido ao não cumprimento das metas definidas para a campanha de vacinação contra a gripe comum e o vírus H1N1 em um ano, o Ministério da Saúde anunciou a prorrogação da campanha por mais uma semana. A tabela apresenta as quantidades de pessoas vacinadas dentre os cinco grupos de risco até a data de início da prorrogação da campanha. Grupo de risco População (milhão) População já vacinada (milhão) (%) Crianças 4,5 0,9 20 Profissionais da Saúde 2,0 1,0 50 Gestantes 2,5 1,5 60 Indígenas 0,5 0,4 80 Idosos 20,5 8,2 40 Qual é a porcentagem aproximada do total de pessoas vacinadas em relação à população total dos cinco grupos de risco?",
        "options": [
          "30%",
          "40%",
          "50%",
          "60%",
          "70%"
        ],
        "correctIndex": 1,
        "explanation": "População total = 4,5 + 2,0 + 2,5 + 0,5 + 20,5 = 30 milhões. Total vacinado = 0,9 + 1,0 + 1,5 + 0,4 + 8,2 = 12 milhões. Porcentagem = (12 &divide; 30) &times; 100 = 40%.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                Devido ao não cumprimento das metas definidas para a campanha de vacinação contra a gripe comum e o vírus H1N1 em um ano, o Ministério da Saúde anunciou a prorrogação da campanha por mais uma semana. A tabela apresenta as quantidades de pessoas vacinadas dentre os cinco grupos de risco até a data de início da prorrogação da campanha.<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                    <thead>\n                        <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                            <th style=\"padding: 10px; text-align: left;\">Grupo de risco</th>\n                            <th style=\"padding: 10px; text-align: center;\">População (milhão)</th>\n                            <th style=\"padding: 10px; text-align: center;\">População já vacinada (milhão)</th>\n                            <th style=\"padding: 10px; text-align: center;\">(%)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Crianças</td>\n                            <td style=\"padding: 10px; text-align: center;\">4,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">0,9</td>\n                            <td style=\"padding: 10px; text-align: center;\">20</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Profissionais da Saúde</td>\n                            <td style=\"padding: 10px; text-align: center;\">2,0</td>\n                            <td style=\"padding: 10px; text-align: center;\">1,0</td>\n                            <td style=\"padding: 10px; text-align: center;\">50</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Gestantes</td>\n                            <td style=\"padding: 10px; text-align: center;\">2,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">1,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">60</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Indígenas</td>\n                            <td style=\"padding: 10px; text-align: center;\">0,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">0,4</td>\n                            <td style=\"padding: 10px; text-align: center;\">80</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Idosos</td>\n                            <td style=\"padding: 10px; text-align: center;\">20,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">8,2</td>\n                            <td style=\"padding: 10px; text-align: center;\">40</td>\n                        </tr>\n                    </tbody>\n                </table>\n                Qual é a porcentagem aproximada do total de pessoas vacinadas em relação à população total dos cinco grupos de risco?",
        "optionsHtml": [
          "30%",
          "40%",
          "50%",
          "60%",
          "70%"
        ],
        "explanationHtml": "População total = 4,5 + 2,0 + 2,5 + 0,5 + 20,5 = 30 milhões.<br>Total vacinado = 0,9 + 1,0 + 1,5 + 0,4 + 8,2 = 12 milhões.<br>Porcentagem = (12 &divide; 30) &times; 100 = 40%."
      },
      {
        "id": "unit3_avaliacao_3",
        "text": "Questão 3 (ENEM) João deseja comprar um carro cujo preço à vista, com todos os descontos possíveis, é de R$ 21 000,00, e esse valor não será reajustado nos meses seguintes. Ele tem R$ 20 000,00, que podem ser aplicados a uma taxa de juros compostos de 2% ao mês, e ele escolhe deixar todo seu dinheiro aplicado até que o montante atinja o valor do carro. Para ter o carro, João deverá esperar",
        "options": [
          "2 meses e terá a quantia exata.",
          "3 meses e terá a quantia exata.",
          "3 meses e ainda sobrarão, aproximadamente, R$ 225,00.",
          "4 meses e ainda sobrarão, aproximadamente, R$ 430,00.",
          "4 meses e terá a quantia exata."
        ],
        "correctIndex": 2,
        "explanation": "M = C &middot; (1 + i) t M = 20.000 &middot; (1,02) 3 = 20.000 &middot; 1,061208 = R$ 21.224,16. Após 3 meses ele terá o valor necessário e sobrarão cerca de R$ 224,16 (aproximadamente R$ 225,00).",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                João deseja comprar um carro cujo preço à vista, com todos os descontos possíveis, é de R$ 21 000,00, e esse valor não será reajustado nos meses seguintes. Ele tem R$ 20 000,00, que podem ser aplicados a uma taxa de juros compostos de 2% ao mês, e ele escolhe deixar todo seu dinheiro aplicado até que o montante atinja o valor do carro. Para ter o carro, João deverá esperar",
        "optionsHtml": [
          "2 meses e terá a quantia exata.",
          "3 meses e terá a quantia exata.",
          "3 meses e ainda sobrarão, aproximadamente, R$ 225,00.",
          "4 meses e ainda sobrarão, aproximadamente, R$ 430,00.",
          "4 meses e terá a quantia exata."
        ],
        "explanationHtml": "M = C &middot; (1 + i)<sup>t</sup><br>M = 20.000 &middot; (1,02)<sup>3</sup> = 20.000 &middot; 1,061208 = R$ 21.224,16.<br>Após 3 meses ele terá o valor necessário e sobrarão cerca de R$ 224,16 (aproximadamente R$ 225,00)."
      },
      {
        "id": "unit3_avaliacao_4",
        "text": "Questão 4 (UERJ) Observe o anúncio a seguir, que apresenta descontos promocionais de uma loja. Admita que essa promoção obedece à seguinte sequência: &bull; primeiro desconto de 10% sobre o preço da mercadoria; &bull; segundo desconto de 10% sobre o valor após o primeiro desconto; &bull; desconto de R$ 100,00 sobre o valor após o segundo desconto. Determine o preço inicial de uma mercadoria cujo valor, após os três descontos, é igual a R$ 710,00.",
        "options": [
          "R$ 1 000,00.",
          "R$ 1 050,00.",
          "R$ 1 100,00.",
          "R$ 1 150,00.",
          "R$ 1 200,00."
        ],
        "correctIndex": 0,
        "explanation": "Fazendo o caminho reverso: Antes do desconto de R$ 100: 710 + 100 = R$ 810,00. Esse valor representa 90% após o segundo desconto: 810 &divide; 0,9 = R$ 900,00. Esse valor representa 90% do preço original: 900 &divide; 0,9 = R$ 1 000,00.",
        "contentHtml": "<strong>Questão 4 (UERJ)</strong><br><br>\n                Observe o anúncio a seguir, que apresenta descontos promocionais de uma loja.<br><br>\n                <img src=\"/imagens/mega.jpeg\" alt=\"Anúncio Mega Desconto\" class=\"img-center\"><br>\n                Admita que essa promoção obedece à seguinte sequência:<br>\n                &bull; primeiro desconto de 10% sobre o preço da mercadoria;<br>\n                &bull; segundo desconto de 10% sobre o valor após o primeiro desconto;<br>\n                &bull; desconto de R$ 100,00 sobre o valor após o segundo desconto.<br><br>\n                Determine o preço inicial de uma mercadoria cujo valor, após os três descontos, é igual a R$ 710,00.",
        "optionsHtml": [
          "R$ 1 000,00.",
          "R$ 1 050,00.",
          "R$ 1 100,00.",
          "R$ 1 150,00.",
          "R$ 1 200,00."
        ],
        "explanationHtml": "Fazendo o caminho reverso:<br>Antes do desconto de R$ 100: 710 + 100 = R$ 810,00.<br>Esse valor representa 90% após o segundo desconto: 810 &divide; 0,9 = R$ 900,00.<br>Esse valor representa 90% do preço original: 900 &divide; 0,9 = R$ 1 000,00."
      },
      {
        "id": "unit3_avaliacao_5",
        "text": "Questão 5 (INÉDITA) No Brasil, foi criada uma forma irregular de empréstimo de dinheiro chamada agiotagem. É a prática de emprestar dinheiro sem autorização ou submissão às regulações das taxas normais. Na agiotagem, essas taxas são superiores à oficial de câmbio. Uma pessoa pegou emprestado com um agiota um capital de R$ 1 000,00 a ser pago daqui a três meses, a juros compostos cobrados da seguinte forma: 10% no primeiro mês; 15% no segundo mês e 20% no terceiro mês, nessa ordem. Ao final desses três meses o montante que essa pessoa estará devendo a esse agiota será de",
        "options": [
          "R$ 1 256,00.",
          "R$ 1 340,00.",
          "R$ 1 518,00.",
          "R$ 1 620,00.",
          "R$ 1 742,00."
        ],
        "correctIndex": 2,
        "explanation": "M = C &middot; (1 + i₁) &middot; (1 + i₂) &middot; (1 + i₃) M = 1000 &middot; 1,10 &middot; 1,15 &middot; 1,20 M = 1100 &middot; 1,15 &middot; 1,20 = 1265 &middot; 1,20 = R$ 1 518,00.",
        "contentHtml": "<strong>Questão 5 (INÉDITA)</strong><br><br>\n                No Brasil, foi criada uma forma irregular de empréstimo de dinheiro chamada agiotagem. É a prática de emprestar dinheiro sem autorização ou submissão às regulações das taxas normais. Na agiotagem, essas taxas são superiores à oficial de câmbio.<br>\n                Uma pessoa pegou emprestado com um agiota um capital de R$ 1 000,00 a ser pago daqui a três meses, a juros compostos cobrados da seguinte forma: 10% no primeiro mês; 15% no segundo mês e 20% no terceiro mês, nessa ordem. Ao final desses três meses o montante que essa pessoa estará devendo a esse agiota será de",
        "optionsHtml": [
          "R$ 1 256,00.",
          "R$ 1 340,00.",
          "R$ 1 518,00.",
          "R$ 1 620,00.",
          "R$ 1 742,00."
        ],
        "explanationHtml": "M = C &middot; (1 + i₁) &middot; (1 + i₂) &middot; (1 + i₃)<br>M = 1000 &middot; 1,10 &middot; 1,15 &middot; 1,20<br>M = 1100 &middot; 1,15 &middot; 1,20 = 1265 &middot; 1,20 = R$ 1 518,00."
      },
      {
        "id": "unit3_avaliacao_6",
        "text": "Questão 6 (ENEM) A maior piscina do mundo, registrada no livro Guinness, está localizada no Chile, em San Alfonso del Mar, cobrindo um terreno de 8 hectares de área. Sabe-se que 1 hectare corresponde a 1 hectômetro quadrado. Qual é o valor, em metros quadrados, da área coberta pelo terreno da piscina?",
        "options": [
          "8",
          "80",
          "800",
          "8 000",
          "80 000"
        ],
        "correctIndex": 4,
        "explanation": "Como 1 ha = 1 hm², temos 8 ha = 8 hm². Sabendo que 1 hm = 100 m, então 1 hm² = (100 m)³ = 10.000 m². Portanto, 8 hm² = 8 × 10.000 = 80.000 m².",
        "contentHtml": "<strong>Questão 6 (ENEM)</strong><br><br>\n                A maior piscina do mundo, registrada no livro Guinness, está localizada no Chile, em San Alfonso del Mar, cobrindo um terreno de 8 hectares de área. Sabe-se que 1 hectare corresponde a 1 hectômetro quadrado. Qual é o valor, em metros quadrados, da área coberta pelo terreno da piscina?",
        "optionsHtml": [
          "8",
          "80",
          "800",
          "8 000",
          "80 000"
        ],
        "explanationHtml": "Como 1 ha = 1 hm², temos 8 ha = 8 hm². Sabendo que 1 hm = 100 m, então 1 hm² = (100 m)³ = 10.000 m². Portanto, 8 hm² = 8 × 10.000 = 80.000 m²."
      },
      {
        "id": "unit3_avaliacao_7",
        "text": "Questão 7 (ENEM) A Secretaria de Saúde de um município avalia um programa que disponibiliza, para cada aluno de uma escola municipal, uma bicicleta, que deve ser usada no trajeto de ida e volta, entre sua casa e a escola. Na fase de implantação do programa, o aluno que morava mais distante da escola realizou sempre o mesmo trajeto, representado na figura, na escala 1 : 25 000, por um período de cinco dias. Quantos quilômetros esse aluno percorreu na fase de implantação do programa?",
        "options": [
          "4",
          "8",
          "16",
          "20",
          "40"
        ],
        "correctIndex": 3,
        "explanation": "Contando os segmentos na malha quadriculada da Casa até a Escola, temos 16 segmentos de 1 cm, totalizando 16 cm no desenho. Pela escala, 16 cm &times; 25.000 = 400.000 cm = 4 km por trajeto simples. Como ele fez ida e volta durante 5 dias, são 10 trajetos: 4 km &times; 10 = 40 km.",
        "contentHtml": "<strong>Questão 7 (ENEM)</strong><br><br>\n                A Secretaria de Saúde de um município avalia um programa que disponibiliza, para cada aluno de uma escola municipal, uma bicicleta, que deve ser usada no trajeto de ida e volta, entre sua casa e a escola. Na fase de implantação do programa, o aluno que morava mais distante da escola realizou sempre o mesmo trajeto, representado na figura, na escala 1 : 25 000, por um período de cinco dias.<br><br>\n                <img src=\"/imagens/malha.jpeg\" class=\"img-center\" alt=\"Malha do trajeto\"><br>\n                Quantos quilômetros esse aluno percorreu na fase de implantação do programa?",
        "optionsHtml": [
          "4",
          "8",
          "16",
          "20",
          "40"
        ],
        "explanationHtml": "Contando os segmentos na malha quadriculada da Casa até a Escola, temos 16 segmentos de 1 cm, totalizando 16 cm no desenho. Pela escala, 16 cm &times; 25.000 = 400.000 cm = 4 km por trajeto simples. Como ele fez ida e volta durante 5 dias, são 10 trajetos: 4 km &times; 10 = 40 km."
      },
      {
        "id": "unit3_avaliacao_8",
        "text": "Questão 8 (ENEM) A London Eye é uma enorme roda-gigante na capital inglesa. Por ser um dos monumentos construídos para celebrar a entrada do terceiro milênio, ela também é conhecida como Roda do Milênio. Um turista brasileiro, em visita à Inglaterra, perguntou a um londrino o diâmetro (destacado na imagem) da Roda do Milênio e ele respondeu que ele tem 443 pés. Disponível em: www.mapadelondres.org. Acesso em: 14 mai. 2015 (adaptado). Não habituado com a unidade pé, e querendo saber sua curiosidade, esse turista consultou um manual de unidades de medidas e constatou que 1 pé equivale a 12 polegadas, e que 1 polegada equivale a 2,54 cm. Após alguns cálculos de conversão, o turista ficou surpreendido com o resultado obtido em metros. Qual a medida que mais se aproxima do diâmetro da Roda do Milênio, em metro?",
        "options": [
          "53",
          "94",
          "113",
          "135",
          "145"
        ],
        "correctIndex": 3,
        "explanation": "Cálculo da conversão: 443 pés &times; 12 polegadas = 5.316 polegadas. Em centímetros: 5.316 &times; 2,54 cm = 13.502,64 cm. Em metros, isso corresponde a aproximadamente 135 metros.",
        "contentHtml": "<strong>Questão 8 (ENEM)</strong><br><br>\n                A London Eye é uma enorme roda-gigante na capital inglesa. Por ser um dos monumentos construídos para celebrar a entrada do terceiro milênio, ela também é conhecida como Roda do Milênio. Um turista brasileiro, em visita à Inglaterra, perguntou a um londrino o diâmetro (destacado na imagem) da Roda do Milênio e ele respondeu que ele tem 443 pés.<br><br>\n                <img src=\"/imagens/londoneye.jpeg\" class=\"img-center\" alt=\"London Eye\"><br>\n                <small>Disponível em: www.mapadelondres.org. Acesso em: 14 mai. 2015 (adaptado).</small><br><br>\n                Não habituado com a unidade pé, e querendo saber sua curiosidade, esse turista consultou um manual de unidades de medidas e constatou que 1 pé equivale a 12 polegadas, e que 1 polegada equivale a 2,54 cm. Após alguns cálculos de conversão, o turista ficou surpreendido com o resultado obtido em metros. Qual a medida que mais se aproxima do diâmetro da Roda do Milênio, em metro?",
        "optionsHtml": [
          "53",
          "94",
          "113",
          "135",
          "145"
        ],
        "explanationHtml": "Cálculo da conversão: 443 pés &times; 12 polegadas = 5.316 polegadas. Em centímetros: 5.316 &times; 2,54 cm = 13.502,64 cm. Em metros, isso corresponde a aproximadamente 135 metros."
      },
      {
        "id": "unit3_avaliacao_9",
        "text": "Questão 9 (FGV) Observe o diagrama com 5 organizações intergovernamentais de integração sul-americana: Dos 12 países que compõem esse diagrama, integram exatamente 3 das organizações apenas",
        "options": [
          "4.",
          "5.",
          "6.",
          "7.",
          "8."
        ],
        "correctIndex": 0,
        "explanation": "Analisando as intersecções do diagrama, contamos quais países estão presentes em exatamente 3 conjuntos simultaneamente. O total obtido é igual a 4 países.",
        "contentHtml": "<strong>Questão 9 (FGV)</strong><br><br>\n                Observe o diagrama com 5 organizações intergovernamentais de integração sul-americana:<br><br>\n                <img src=\"/imagens/diagrama paises.jpeg\" alt=\"Diagrama de integração sul-americana\" class=\"img-center\"><br>\n                Dos 12 países que compõem esse diagrama, integram exatamente 3 das organizações apenas",
        "optionsHtml": [
          "4.",
          "5.",
          "6.",
          "7.",
          "8."
        ],
        "explanationHtml": "Analisando as intersecções do diagrama, contamos quais países estão presentes em exatamente 3 conjuntos simultaneamente. O total obtido é igual a 4 países."
      },
      {
        "id": "unit3_avaliacao_10",
        "text": "Questão 10 (INÉDITA) Para a comemoração dos 30 anos de fundação, uma loja de eletrodomésticos lançou a promoção Discos Premiados. Para compras a partir de R$ 300,00, os clientes tinham direito de girar uma vez cada um dos três discos representados na roleta a seguir: Girando o disco maior, o participante concorre a uma torradeira (T); no disco médio, a um liquidificador (L) e no pequeno, a R$ 100,00 (R). Para ganhar cada um dos prêmios, basta que a parte colorida esteja posicionada sob a seta indicadora no fim do giro. Após o fim da promoção, a diretoria de marketing apresentou alguns dados acerca dos prêmios conquistados pelos 300 clientes participantes da promoção: 21 ganharam os três prêmios; 44 ganharam torradeira e liquidificador; 49 ganharam liquidificador e R$ 100,00; 66 ganharam torradeira e R$ 100,00; 98 ganharam uma torradeira; 153 ganharam um liquidificador; 184 ganharam R$ 100,00. O número de clientes participantes da promoção que não ganharam nenhum dos prêmios nos discos é igual a",
        "options": [
          "3.",
          "4.",
          "5.",
          "6.",
          "7."
        ],
        "correctIndex": 4,
        "explanation": "Utilizando o Princípio da Inclusão-Exclusão para 3 conjuntos: n(T &cup; L &cup; R) = n(T) + n(L) + n(R) - n(T &cap; L) - n(L &cap; R) - n(T &cap; R) + n(T &cap; L &cap; R) n(T &cup; L &cup; R) = 98 + 153 + 184 - 44 - 49 - 66 + 21 = 295. Clientes que não ganharam nenhum prêmio: 300 - 295 = 5.",
        "contentHtml": "<strong>Questão 10 (INÉDITA)</strong><br><br>\n                Para a comemoração dos 30 anos de fundação, uma loja de eletrodomésticos lançou a promoção Discos Premiados. Para compras a partir de R$ 300,00, os clientes tinham direito de girar uma vez cada um dos três discos representados na roleta a seguir:<br><br>\n                <img src=\"/imagens/roleta premios.jpeg\" alt=\"Roleta Discos Premiados\" class=\"img-center\"><br>\n                Girando o disco maior, o participante concorre a uma torradeira (T); no disco médio, a um liquidificador (L) e no pequeno, a R$ 100,00 (R). Para ganhar cada um dos prêmios, basta que a parte colorida esteja posicionada sob a seta indicadora no fim do giro. Após o fim da promoção, a diretoria de marketing apresentou alguns dados acerca dos prêmios conquistados pelos 300 clientes participantes da promoção: 21 ganharam os três prêmios; 44 ganharam torradeira e liquidificador; 49 ganharam liquidificador e R$ 100,00; 66 ganharam torradeira e R$ 100,00; 98 ganharam uma torradeira; 153 ganharam um liquidificador; 184 ganharam R$ 100,00.<br><br>\n                O número de clientes participantes da promoção que não ganharam nenhum dos prêmios nos discos é igual a",
        "optionsHtml": [
          "3.",
          "4.",
          "5.",
          "6.",
          "7."
        ],
        "explanationHtml": "Utilizando o Princípio da Inclusão-Exclusão para 3 conjuntos:<br>n(T &cup; L &cup; R) = n(T) + n(L) + n(R) - n(T &cap; L) - n(L &cap; R) - n(T &cap; R) + n(T &cap; L &cap; R)<br>n(T &cup; L &cup; R) = 98 + 153 + 184 - 44 - 49 - 66 + 21 = 295.<br>Clientes que não ganharam nenhum prêmio: 300 - 295 = 5."
      }
    ],
    "substituta": [
      {
        "id": "unit3_substituta_1",
        "text": "Questão 1 (ENEM) O Brasil é um país com uma vantagem econômica clara no terreno de recursos naturais, dispondo de uma das maiores áreas com vocação agrícola do mundo. Especialistas calculam que, dos 853 milhões de hectares do país, as cidades, as reservas indígenas e as áreas de preservação, incluindo florestas e mananciais, cobram por volta de 470 milhões de hectares. Aproximadamente 280 milhões se destinam à agropecuária, 200 milhões para pastagens e 80 milhões para a agricultura, somadas as lavouras anuais e perenes, como o café e a fruticultura. FORTES, G. Recuperação de pastagens é alternativa para ampliar cultivos. Folha de S. Paulo, 30 out. 2011. De acordo com os dados apresentados, o percentual correspondente à área utilizada para agricultura em relação à área do território brasileiro é mais próximo de",
        "options": [
          "32,8%",
          "28,6%",
          "10,7%",
          "9,4%",
          "8,0%"
        ],
        "correctIndex": 3,
        "explanation": "A área de agricultura é 80 milhões. Área total: 853 milhões. Cálculo: (80 / 853) * 100 ≈ 9,37%. O valor mais próximo é 9,4%.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n\t\tO Brasil é um país com uma vantagem econômica clara no terreno de recursos naturais, dispondo de uma das maiores áreas com vocação agrícola do mundo. Especialistas calculam que, dos 853 milhões de hectares do país, as cidades, as reservas indígenas e as áreas de preservação, incluindo florestas e mananciais, cobram por volta de 470 milhões de hectares. Aproximadamente 280 milhões se destinam à agropecuária, 200 milhões para pastagens e 80 milhões para a agricultura, somadas as lavouras anuais e perenes, como o café e a fruticultura.<br><br>\n                FORTES, G. Recuperação de pastagens é alternativa para ampliar cultivos. Folha de S. Paulo, 30 out. 2011.<br><br>\n                De acordo com os dados apresentados, o percentual correspondente à área utilizada para agricultura em relação à área do território brasileiro é mais próximo de",
        "optionsHtml": [
          "32,8%",
          "28,6%",
          "10,7%",
          "9,4%",
          "8,0%"
        ],
        "explanationHtml": "A área de agricultura é 80 milhões. Área total: 853 milhões. Cálculo: (80 / 853) * 100 ≈ 9,37%. O valor mais próximo é 9,4%."
      },
      {
        "id": "unit3_substituta_2",
        "text": "Questão 2 (INÉDITA) Júlia comprou uma mercadoria no valor de R$ 150,00 no atacado. Para vender na sua loja, ela acrescentou 50% de lucro. No período de promoção, ela ofereceu essa mercadoria com 40% de desconto sobre o preço que ali estava. Ela imaginava que ainda teria lucro. Com esses descontos, a Júlia na verdade teve",
        "options": [
          "lucro de R$ 10,00",
          "lucro de R$ 15,00",
          "lucro de R$ 25,00",
          "prejuízo de R$ 15,00",
          "prejuízo de R$ 20,00"
        ],
        "correctIndex": 3,
        "explanation": "Preço com lucro: 150 + 50% = 225. Desconto de 40% sobre 225: 225 * 0,6 = 135. Comparando com o custo (150): 135 - 150 = -15. Logo, prejuízo de R$ 15,00.",
        "contentHtml": "<strong>Questão 2 (INÉDITA)</strong><br><br>\n                Júlia comprou uma mercadoria no valor de R$ 150,00 no atacado. Para vender na sua loja, ela acrescentou 50% de lucro. No período de promoção, ela ofereceu essa mercadoria com 40% de desconto sobre o preço que ali estava. Ela imaginava que ainda teria lucro.<br><br>\n                Com esses descontos, a Júlia na verdade teve",
        "optionsHtml": [
          "lucro de R$ 10,00",
          "lucro de R$ 15,00",
          "lucro de R$ 25,00",
          "prejuízo de R$ 15,00",
          "prejuízo de R$ 20,00"
        ],
        "explanationHtml": "Preço com lucro: 150 + 50% = 225. Desconto de 40% sobre 225: 225 * 0,6 = 135. Comparando com o custo (150): 135 - 150 = -15. Logo, prejuízo de R$ 15,00."
      },
      {
        "id": "unit3_substituta_3",
        "text": "Questão 3 (ENEM) Uma pessoa aplicou certa quantia em ações. No primeiro mês, ela perdeu 30% do total do investimento e, no segundo mês, recuperou 20% do que havia perdido. Depois desses dois meses, resolveu tirar o montante de R$ 3 800,00 gerado pela aplicação. A quantia inicial que essa pessoa aplicou em ações corresponde ao valor de",
        "options": [
          "R$ 4 222,22",
          "R$ 4 523,80",
          "R$ 5 000,00",
          "R$ 13 300,00",
          "R$ 17 100,00"
        ],
        "correctIndex": 2,
        "explanation": "Perda de 30% deixa 70%. Recuperar 20% do que perdeu (20% de 30%) é 6%. Saldo final: 70% + 6% = 76%. Se 0,76x = 3800, então x = 3800 / 0,76 = 5000.",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                Uma pessoa aplicou certa quantia em ações. No primeiro mês, ela perdeu 30% do total do investimento e, no segundo mês, recuperou 20% do que havia perdido. Depois desses dois meses, resolveu tirar o montante de R$ 3 800,00 gerado pela aplicação.<br><br>\n                A quantia inicial que essa pessoa aplicou em ações corresponde ao valor de",
        "optionsHtml": [
          "R$ 4 222,22",
          "R$ 4 523,80",
          "R$ 5 000,00",
          "R$ 13 300,00",
          "R$ 17 100,00"
        ],
        "explanationHtml": "Perda de 30% deixa 70%. Recuperar 20% do que perdeu (20% de 30%) é 6%. Saldo final: 70% + 6% = 76%. Se 0,76x = 3800, então x = 3800 / 0,76 = 5000."
      },
      {
        "id": "unit3_substituta_4",
        "text": "Questão 4 (INÉDITA) No Brasil, foi criada uma forma irregular de empréstimo de dinheiro chamada agiotagem. É a prática de emprestar dinheiro sem autorização ou submissão às regulações das taxas normais. Na agiotagem, essas taxas são superiores à oficial de câmbio. Uma pessoa pegou emprestado com um agiota um capital de R$ 1 000,00 a ser pago daqui a três meses, a juros compostos cobrados da seguinte forma: 10% no primeiro mês; 15% no segundo mês e 20% no terceiro mês, nessa ordem. Ao final desses três meses o montante que essa pessoa estará devendo a esse agiota será de",
        "options": [
          "R$ 1 256,00",
          "R$ 1 340,00",
          "R$ 1 518,00",
          "R$ 1 620,00",
          "R$ 1 742,00"
        ],
        "correctIndex": 2,
        "explanation": "Montante = 1000 * 1,10 * 1,15 * 1,20 = 1518. Os juros incidem sobre o saldo acumulado de cada mês.",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n \t\tNo Brasil, foi criada uma forma irregular de empréstimo de dinheiro chamada agiotagem. É a prática de emprestar dinheiro sem autorização ou submissão às regulações das taxas normais. Na agiotagem, essas taxas são superiores à oficial de câmbio.<br>\n                Uma pessoa pegou emprestado com um agiota um capital de R$ 1 000,00 a ser pago daqui a três meses, a juros compostos cobrados da seguinte forma: 10% no primeiro mês; 15% no segundo mês e 20% no terceiro mês, nessa ordem. Ao final desses três meses o montante que essa pessoa estará devendo a esse agiota será de",
        "optionsHtml": [
          "R$ 1 256,00",
          "R$ 1 340,00",
          "R$ 1 518,00",
          "R$ 1 620,00",
          "R$ 1 742,00"
        ],
        "explanationHtml": "Montante = 1000 * 1,10 * 1,15 * 1,20 = 1518. Os juros incidem sobre o saldo acumulado de cada mês."
      },
      {
        "id": "unit3_substituta_5",
        "text": "Questão 5 (ENEM) A maior piscina do mundo está localizada no Chile, cobrindo um terreno de 8 hectares de área. Sabe-se que 1 hectare corresponde a 1 hectômetro quadrado. Qual é o valor, em metros quadrados, da área coberta pelo terreno da piscina?",
        "options": [
          "8",
          "80",
          "800",
          "8 000",
          "80 000"
        ],
        "correctIndex": 4,
        "explanation": "1 ha = 1 hm² = 10.000 m². Portanto, 8 ha = 8 * 10.000 = 80.000 m².",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                A maior piscina do mundo está localizada no Chile, cobrindo um terreno de 8 hectares de área. Sabe-se que 1 hectare corresponde a 1 hectômetro quadrado. Qual é o valor, em metros quadrados, da área coberta pelo terreno da piscina?",
        "optionsHtml": [
          "8",
          "80",
          "800",
          "8 000",
          "80 000"
        ],
        "explanationHtml": "1 ha = 1 hm² = 10.000 m². Portanto, 8 ha = 8 * 10.000 = 80.000 m²."
      },
      {
        "id": "unit3_substituta_6",
        "text": "Questão 6 (INÉDITA) A tabela nutricional é a comunicação entre a empresa produtora de alimentos e os consumidores que desejam maiores informações sobre os produtos que estão comprando. Na embalagem de um alimento analisado por uma pessoa que segue orientações nutricionais, vêm descritas as seguintes informações: INFORMAÇÃO NUTRICIONAL Valor nutricional numa porção de 50 g Quantidade por porção VD% Carboidratos: 24,5 g 7,8% Proteínas: 35 dg 4,5% Sódio: 750 mg 4% Se essa pessoa consumir, durante uma semana, 2 kg desse alimento, ela terá consumido uma quantidade de carboidratos, proteína e sódio total de",
        "options": [
          "1 000 g",
          "1 150 g",
          "1 200 g",
          "1 250 g",
          "1 300 g"
        ],
        "correctIndex": 1,
        "explanation": "Por porção (50g): 24,5g + 3,5g (35dg) + 0,75g (750mg) = 28,75g. Em 2kg (40 porções): 40 * 28,75 = 1.150g.",
        "contentHtml": "<strong>Questão 6 (INÉDITA)</strong><br><br>\n                A tabela nutricional é a comunicação entre a empresa produtora de alimentos e os consumidores que desejam maiores informações sobre os produtos que estão comprando. Na embalagem de um alimento analisado por uma pessoa que segue orientações nutricionais, vêm descritas as seguintes informações:<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                    <thead>\n                        <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                            <th colspan=\"3\" style=\"padding: 10px; text-align: center;\">INFORMAÇÃO NUTRICIONAL<br><small>Valor nutricional numa porção de 50 g</small></th>\n                        </tr>\n                        <tr style=\"background-color: #f8fafc; border-bottom: 1px solid #edf2f7;\">\n                            <th style=\"padding: 8px; text-align: left;\">Quantidade por porção</th>\n                            <th style=\"padding: 8px; text-align: center;\">VD%</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 8px;\">Carboidratos: 24,5 g</td>\n                            <td style=\"padding: 8px; text-align: center;\">7,8%</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 8px;\">Proteínas: 35 dg</td>\n                            <td style=\"padding: 8px; text-align: center;\">4,5%</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 8px;\">Sódio: 750 mg</td>\n                            <td style=\"padding: 8px; text-align: center;\">4%</td>\n                        </tr>\n                    </tbody>\n                </table>\n                Se essa pessoa consumir, durante uma semana, 2 kg desse alimento, ela terá consumido uma quantidade de carboidratos, proteína e sódio total de",
        "optionsHtml": [
          "1 000 g",
          "1 150 g",
          "1 200 g",
          "1 250 g",
          "1 300 g"
        ],
        "explanationHtml": "Por porção (50g): 24,5g + 3,5g (35dg) + 0,75g (750mg) = 28,75g. Em 2kg (40 porções): 40 * 28,75 = 1.150g."
      },
      {
        "id": "unit3_substituta_7",
        "text": "Questão 7 (UFPB ADAPTADO) Antes da realização de uma campanha de conscientização de qualidade de vida, a Secretaria de Saúde de um município fez algumas observações de campo e notou que, dos 300 indivíduos analisados, 130 eram tabagistas, 150 eram alcoólatras e 40 tinham esses dois vícios. Após a campanha, o número de pessoas que apresentaram, pelo menos, um dos dois vícios sofreu uma redução de 20%. Com base nessas informações, conclui-se que com essa redução, o número de pessoas sem qualquer um desses vícios passou a ser:",
        "options": [
          "102",
          "104",
          "106",
          "108",
          "110"
        ],
        "correctIndex": 3,
        "explanation": "Total com vício inicial: 130 + 150 - 40 = 240. Redução de 20% (sobra 80%): 240 * 0,8 = 192. Pessoas sem vício: 300 - 192 = 108.",
        "contentHtml": "<strong>Questão 7 (UFPB ADAPTADO)</strong><br><br>\n                Antes da realização de uma campanha de conscientização de qualidade de vida, a Secretaria de Saúde de um município fez algumas observações de campo e notou que, dos 300 indivíduos analisados, 130 eram tabagistas, 150 eram alcoólatras e 40 tinham esses dois vícios.<br>\n                Após a campanha, o número de pessoas que apresentaram, pelo menos, um dos dois vícios sofreu uma redução de 20%.<br>\n                Com base nessas informações, conclui-se que com essa redução, o número de pessoas sem qualquer um desses vícios passou a ser:",
        "optionsHtml": [
          "102",
          "104",
          "106",
          "108",
          "110"
        ],
        "explanationHtml": "Total com vício inicial: 130 + 150 - 40 = 240. Redução de 20% (sobra 80%): 240 * 0,8 = 192. Pessoas sem vício: 300 - 192 = 108."
      },
      {
        "id": "unit3_substituta_8",
        "text": "Questão 8 (INÉDITA) Para a comemoração dos 30 anos de fundação, uma loja de eletrodomésticos lançou a promoção Discos Premiados. Para compras a partir de R$ 300,00, os clientes tinham direito de girar uma vez cada um dos três discos representados na roleta a seguir: Girando o disco maior, o participante concorre a uma torradeira (T); no disco médio, a um liquidificador (L) e no pequeno, a R$ 100,00 (R). Para ganhar cada um dos prêmios, basta que a parte colorida esteja posicionada sob a seta indicadora no fim do giro. Após o fim da promoção, a diretoria de marketing apresentou alguns dados acerca dos prêmios conquistados pelos 300 clientes participantes da promoção: 21 ganharam os três prêmios; 44 ganharam torradeira e liquidificador; 49 ganharam liquidificador e R$ 100,00; 66 ganharam torradeira e R$ 100,00; 98 ganharam uma torradeira; 153 ganharam um liquidificador; 184 ganharam R$ 100,00. O número de clientes participantes da promoção que não ganharam nenhum dos prêmios nos discos é igual a",
        "options": [
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "correctIndex": 2,
        "explanation": "Pelo Princípio da Inclusão-Exclusão: 98 + 153 + 184 - (44 + 49 + 66) + 21 = 295. Logo, 300 - 295 = 5 pessoas não ganharam nada.",
        "contentHtml": "<strong>Questão 8 (INÉDITA)</strong><br><br>\n                Para a comemoração dos 30 anos de fundação, uma loja de eletrodomésticos lançou a promoção Discos Premiados. Para compras a partir de R$ 300,00, os clientes tinham direito de girar uma vez cada um dos três discos representados na roleta a seguir:<br><br>\n                <img src=\"/imagens/roleta premios.jpeg\" alt=\"Roleta Discos Premiados\" class=\"img-center\"><br>\n                Girando o disco maior, o participante concorre a uma torradeira (T); no disco médio, a um liquidificador (L) e no pequeno, a R$ 100,00 (R). Para ganhar cada um dos prêmios, basta que a parte colorida esteja posicionada sob a seta indicadora no fim do giro. Após o fim da promoção, a diretoria de marketing apresentou alguns dados acerca dos prêmios conquistados pelos 300 clientes participantes da promoção: 21 ganharam os três prêmios; 44 ganharam torradeira e liquidificador; 49 ganharam liquidificador e R$ 100,00; 66 ganharam torradeira e R$ 100,00; 98 ganharam uma torradeira; 153 ganharam um liquidificador; 184 ganharam R$ 100,00.<br>\n                O número de clientes participantes da promoção que não ganharam nenhum dos prêmios nos discos é igual a",
        "optionsHtml": [
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "explanationHtml": "Pelo Princípio da Inclusão-Exclusão: 98 + 153 + 184 - (44 + 49 + 66) + 21 = 295. Logo, 300 - 295 = 5 pessoas não ganharam nada."
      },
      {
        "id": "unit3_substituta_9",
        "text": "Questão 9 (ENEM) Uma indústria fabricou 8 000 unidades no primeiro ano. No ano seguinte, aumentou a produção em 50%. Estima-se que esse aumento de 50% se repita anualmente. Qual expressão determina o número de unidades produzidas P em função do ano t (para t ≥ 1)?",
        "options": [
          "P(t) = 0,5t⁻¹ + 8 000",
          "P(t) = 50t⁻¹ + 8 000",
          "P(t) = 4 000t⁻¹ + 8 000",
          "P(t) = 8 000 · (0,5)ᵗ⁻¹",
          "P(t) = 8 000 · (1,5)ᵗ⁻¹"
        ],
        "correctIndex": 4,
        "explanation": "O fator de aumento é 1,5 (100% + 50%). Como no ano 1 a produção é 8000, usamos o expoente (t-1). Logo: 8000 * (1,5)ᵗ⁻¹.",
        "contentHtml": "<strong>Questão 9 (ENEM)</strong><br><br>\n                Uma indústria fabricou 8 000 unidades no primeiro ano. No ano seguinte, aumentou a produção em 50%. Estima-se que esse aumento de 50% se repita anualmente.<br><br>\n                Qual expressão determina o número de unidades produzidas P em função do ano t (para t ≥ 1)?",
        "optionsHtml": [
          "P(t) = 0,5t⁻¹ + 8 000",
          "P(t) = 50t⁻¹ + 8 000",
          "P(t) = 4 000t⁻¹ + 8 000",
          "P(t) = 8 000 · (0,5)ᵗ⁻¹",
          "P(t) = 8 000 · (1,5)ᵗ⁻¹"
        ],
        "explanationHtml": "O fator de aumento é 1,5 (100% + 50%). Como no ano 1 a produção é 8000, usamos o expoente (t-1). Logo: 8000 * (1,5)ᵗ⁻¹."
      },
      {
        "id": "unit3_substituta_10",
        "text": "Questão 10 (ENEM) Um turista constatou que 1 pé equivale a 12 polegadas e 1 polegada equivale a 2,54 cm. Ele quer saber o diâmetro da London Eye, que tem 443 pés. Qual a medida que mais se aproxima do diâmetro em metros?",
        "options": [
          "53",
          "94",
          "113",
          "135",
          "145"
        ],
        "correctIndex": 3,
        "explanation": "443 pés * 12 pol = 5316 pol. 5316 pol * 2,54 cm = 13502,64 cm ≈ 135 metros.",
        "contentHtml": "<strong>Questão 10 (ENEM)</strong><br><br>\n                Um turista constatou que 1 pé equivale a 12 polegadas e 1 polegada equivale a 2,54 cm. Ele quer saber o diâmetro da London Eye, que tem 443 pés.<br><br>\n                Qual a medida que mais se aproxima do diâmetro em metros?",
        "optionsHtml": [
          "53",
          "94",
          "113",
          "135",
          "145"
        ],
        "explanationHtml": "443 pés * 12 pol = 5316 pol. 5316 pol * 2,54 cm = 13502,64 cm ≈ 135 metros."
      }
    ],
    "simulado1": [
      {
        "id": "unit3_simulado1_1",
        "text": "Questão 1 (ENEM) No dia 12 de janeiro de 2010, o governo da Venezuela adotou um plano de racionamento de energia que previa cortes no fornecimento em todo o país. O ministro da Energia afirmou que uma das formas mais eficazes de se economizar energia nos domicílios seria o uso de lâmpadas que consomem 20% menos da energia consumida por lâmpadas normais. Em uma residência, o consumo mensal de energia proveniente do uso de lâmpadas comuns é de 63 kWh. Se todas as lâmpadas dessa residência forem trocadas pelas lâmpadas econômicas, esse consumo passará a ser de, aproximadamente,",
        "options": [
          "9 kWh.",
          "11 kWh.",
          "22 kWh.",
          "35 kWh.",
          "50 kWh."
        ],
        "correctIndex": 4,
        "explanation": "20% de 63 = 12,6. Então: 63 - 12,6 = 50,4 kWh. Aproximadamente 50 kWh.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                No dia 12 de janeiro de 2010, o governo da Venezuela adotou um plano de racionamento de energia que previa cortes no fornecimento em todo o país. O ministro da Energia afirmou que uma das formas mais eficazes de se economizar energia nos domicílios seria o uso de lâmpadas que consomem 20% menos da energia consumida por lâmpadas normais. Em uma residência, o consumo mensal de energia proveniente do uso de lâmpadas comuns é de 63 kWh. Se todas as lâmpadas dessa residência forem trocadas pelas lâmpadas econômicas, esse consumo passará a ser de, aproximadamente,",
        "optionsHtml": [
          "9 kWh.",
          "11 kWh.",
          "22 kWh.",
          "35 kWh.",
          "50 kWh."
        ],
        "explanationHtml": "20% de 63 = 12,6. Então: 63 - 12,6 = 50,4 kWh. Aproximadamente 50 kWh."
      },
      {
        "id": "unit3_simulado1_2",
        "text": "Questão 2 (ENEM) O Brasil é um país com uma vantagem econômica clara no terreno de recursos naturais, dispondo de uma das maiores áreas com vocação agrícola do mundo. Especialistas calculam que, dos 853 milhões de hectares do país, as cidades, as reservas indígenas e as áreas de preservação, incluindo florestas e mananciais, cobram por volta de 470 milhões de hectares. Aproximadamente 280 milhões se destinam à agropecuária, 200 milhões para pastagens e 80 milhões para a agricultura, somadas as lavouras anuais e perenes, como o café e a fruticultura. FORTES, G. Recuperação de pastagens é alternativa para ampliar cultivos. Folha de S. Paulo, 30 out. 2011. De acordo com os dados apresentados, o percentual correspondente à área utilizada para agricultura em relação à área do território brasileiro é mais próximo de",
        "options": [
          "32,8%.",
          "28,6%.",
          "10,7%.",
          "9,4%.",
          "8,0%."
        ],
        "correctIndex": 3,
        "explanation": "A área utilizada para agricultura é de 80 milhões de hectares. Então: (80 ÷ 853) × 100 ≈ 9,4%.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                O Brasil é um país com uma vantagem econômica clara no terreno de recursos naturais, dispondo de uma das maiores áreas com vocação agrícola do mundo. Especialistas calculam que, dos 853 milhões de hectares do país, as cidades, as reservas indígenas e as áreas de preservação, incluindo florestas e mananciais, cobram por volta de 470 milhões de hectares. Aproximadamente 280 milhões se destinam à agropecuária, 200 milhões para pastagens e 80 milhões para a agricultura, somadas as lavouras anuais e perenes, como o café e a fruticultura.<br><br>\n                FORTES, G. Recuperação de pastagens é alternativa para ampliar cultivos. Folha de S. Paulo, 30 out. 2011.<br><br>\n                De acordo com os dados apresentados, o percentual correspondente à área utilizada para agricultura em relação à área do território brasileiro é mais próximo de",
        "optionsHtml": [
          "32,8%.",
          "28,6%.",
          "10,7%.",
          "9,4%.",
          "8,0%."
        ],
        "explanationHtml": "A área utilizada para agricultura é de 80 milhões de hectares. Então: (80 ÷ 853) × 100 ≈ 9,4%."
      },
      {
        "id": "unit3_simulado1_3",
        "text": "Questão 3 (ENEM) João deseja comprar um carro cujo preço à vista, com todos os descontos possíveis, é de R$ 21 000,00, e esse valor não será reajustado nos meses seguintes. Ele tem R$ 20 000,00, que podem ser aplicados a uma taxa de juros compostos de 2% ao mês, e ele escolhe deixar todo seu dinheiro aplicado até que o montante atinja o valor do carro. Para ter o carro, João deverá esperar",
        "options": [
          "2 meses e terá a quantia exata.",
          "3 meses e terá a quantia exata.",
          "3 meses e ainda sobrarão, aproximadamente, R$ 225,00.",
          "4 meses e ainda sobrarão, aproximadamente, R$ 430,00.",
          "4 meses e terá a quantia exata."
        ],
        "correctIndex": 2,
        "explanation": "M = C &middot; (1 + i) t M = 20.000 &middot; (1,02) 3 = 20.000 &middot; 1,061208 = R$ 21.224,16. Após 3 meses ele terá o valor necessário e sobrarão cerca de R$ 224,16 (aproximadamente R$ 225,00).",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                João deseja comprar um carro cujo preço à vista, com todos os descontos possíveis, é de R$ 21 000,00, e esse valor não será reajustado nos meses seguintes. Ele tem R$ 20 000,00, que podem ser aplicados a uma taxa de juros compostos de 2% ao mês, e ele escolhe deixar todo seu dinheiro aplicado até que o montante atinja o valor do carro. Para ter o carro, João deverá esperar",
        "optionsHtml": [
          "2 meses e terá a quantia exata.",
          "3 meses e terá a quantia exata.",
          "3 meses e ainda sobrarão, aproximadamente, R$ 225,00.",
          "4 meses e ainda sobrarão, aproximadamente, R$ 430,00.",
          "4 meses e terá a quantia exata."
        ],
        "explanationHtml": "M = C &middot; (1 + i)<sup>t</sup><br>M = 20.000 &middot; (1,02)<sup>3</sup> = 20.000 &middot; 1,061208 = R$ 21.224,16.<br>Após 3 meses ele terá o valor necessário e sobrarão cerca de R$ 224,16 (aproximadamente R$ 225,00)."
      },
      {
        "id": "unit3_simulado1_4",
        "text": "Questão 4 (ENEM) Uma pessoa aplicou certa quantia em ações. No primeiro mês, ela perdeu 30% do total do investmento e, no segundo mês, recuperou 20% do que havia perdido. Depois desses dois meses, resolveu tirar o montante de R$ 3 800,00 gerado pela aplicação. A quantia inicial que essa pessoa aplicou em ações corresponds ao valor de",
        "options": [
          "R$ 4 222,22.",
          "R$ 4 523,80.",
          "R$ 5 000,00.",
          "R$ 13 300,00.",
          "R$ 17 100,00."
        ],
        "correctIndex": 2,
        "explanation": "Se perdeu 30%, restou 70% (0,7C). No segundo mês recuperou 20% do que havia perdido (20% de 30% = 6%). Total no final: 70% + 6% = 76% (0,76C). 0,76C = 3800 &rArr; C = 3800 &divide; 0,76 = R$ 5 000,00.",
        "contentHtml": "<strong>Questão 4 (ENEM)</strong><br><br>\n                Uma pessoa aplicou certa quantia em ações. No primeiro mês, ela perdeu 30% do total do investmento e, no segundo mês, recuperou 20% do que havia perdido. Depois desses dois meses, resolveu tirar o montante de R$ 3 800,00 gerado pela aplicação. A quantia inicial que essa pessoa aplicou em ações corresponds ao valor de",
        "optionsHtml": [
          "R$ 4 222,22.",
          "R$ 4 523,80.",
          "R$ 5 000,00.",
          "R$ 13 300,00.",
          "R$ 17 100,00."
        ],
        "explanationHtml": "Se perdeu 30%, restou 70% (0,7C). No segundo mês recuperou 20% <i>do que havia perdido</i> (20% de 30% = 6%).<br>Total no final: 70% + 6% = 76% (0,76C).<br>0,76C = 3800 &rArr; C = 3800 &divide; 0,76 = R$ 5 000,00."
      },
      {
        "id": "unit3_simulado1_5",
        "text": "Questão 5 (ENEM) A maior piscina do mundo, registrada no livro Guinness, está localizada no Chile, em San Alfonso del Mar, cobrindo um terreno de 8 hectares de área. Sabe-se que 1 hectare corresponde a 1 hectômetro quadrado. Qual é o valor, em metros quadrados, da área coberta pelo terreno da piscina?",
        "options": [
          "8",
          "80",
          "800",
          "8 000",
          "80 000"
        ],
        "correctIndex": 4,
        "explanation": "Como 1 ha = 1 hm², temos 8 ha = 8 hm². Sabendo que 1 hm = 100 m, então 1 hm² = (100 m)³ = 10.000 m². Portanto, 8 hm² = 8 × 10.000 = 80.000 m².",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                A maior piscina do mundo, registrada no livro Guinness, está localizada no Chile, em San Alfonso del Mar, cobrindo um terreno de 8 hectares de área. Sabe-se que 1 hectare corresponde a 1 hectômetro quadrado. Qual é o valor, em metros quadrados, da área coberta pelo terreno da piscina?",
        "optionsHtml": [
          "8",
          "80",
          "800",
          "8 000",
          "80 000"
        ],
        "explanationHtml": "Como 1 ha = 1 hm², temos 8 ha = 8 hm². Sabendo que 1 hm = 100 m, então 1 hm² = (100 m)³ = 10.000 m². Portanto, 8 hm² = 8 × 10.000 = 80.000 m²."
      },
      {
        "id": "unit3_simulado1_6",
        "text": "Questão 6 (ENEM) Atendendo à encomenda de um mecânico, um soldador terá de juntar duas barras de metais diferentes. A solda utilizada tem espessura de 18 milímetros, conforme ilustrado na figura. Qual o comprimento, em metros, da peça resultante após a soldagem?",
        "options": [
          "2,518",
          "2,5018",
          "2,2300",
          "2,0230",
          "2,6800"
        ],
        "correctIndex": 0,
        "explanation": "Convertendo todas as medidas para metros: 1,5 m + 1 m + 0,018 m (pois 18 mm = 0,018 m). Somando tudo, obtemos: 1,5 + 1 + 0,018 = 2,518 metros.",
        "contentHtml": "<strong>Questão 6 (ENEM)</strong><br><br>\n                Atendendo à encomenda de um mecânico, um soldador terá de juntar duas barras de metais diferentes. A solda utilizada tem espessura de 18 milímetros, conforme ilustrado na figura.<br><br>\n                <img src=\"/imagens/solda.jpeg\" class=\"img-center\" alt=\"Esquema da soldagem\">\n                Qual o comprimento, em metros, da peça resultante após a soldagem?",
        "optionsHtml": [
          "2,518",
          "2,5018",
          "2,2300",
          "2,0230",
          "2,6800"
        ],
        "explanationHtml": "Convertendo todas as medidas para metros: 1,5 m + 1 m + 0,018 m (pois 18 mm = 0,018 m). Somando tudo, obtemos: 1,5 + 1 + 0,018 = 2,518 metros."
      },
      {
        "id": "unit3_simulado1_7",
        "text": "Questão 7 (FGV) Observe o diagrama com 5 organizações intergovernamentais de integração sul-americana: Dos 12 países que compõem esse diagrama, integram exatamente 3 das organizações apenas",
        "options": [
          "4.",
          "5.",
          "6.",
          "7.",
          "8."
        ],
        "correctIndex": 0,
        "explanation": "Analisando as intersecções do diagrama, contamos quais países estão presentes em exatamente 3 conjuntos simultaneamente. O total obtido é igual a 4 países.",
        "contentHtml": "<strong>Questão 7 (FGV)</strong><br><br>\n                Observe o diagrama com 5 organizações intergovernamentais de integração sul-americana:<br><br>\n                <img src=\"/imagens/diagrama paises.jpeg\" alt=\"Diagrama de integração sul-americana\" class=\"img-center\"><br>\n                Dos 12 países que compõem esse diagrama, integram exatamente 3 das organizações apenas",
        "optionsHtml": [
          "4.",
          "5.",
          "6.",
          "7.",
          "8."
        ],
        "explanationHtml": "Analisando as intersecções do diagrama, contamos quais países estão presentes em exatamente 3 conjuntos simultaneamente. O total obtido é igual a 4 países."
      },
      {
        "id": "unit3_simulado1_8",
        "text": "Questão 8 (UFPB ADAPTADO) Antes da realização de uma campanha de conscientização de qualidade de vida, a Secretaria de Saúde de um município fez algumas observações de campo e notou que, dos 300 indivíduos analisados, 130 eram tabagistas, 150 eram alcoólatras e 40 tinham esses dois vícios. Após a campanha, o número de pessoas que apresentaram, pelo menos, um dos dois vícios sofreu uma redução de 20%. Com base nessas informações, conclui-se que com essa redução, o número de pessoas sem qualquer um desses vícios passou a ser:",
        "options": [
          "102.",
          "104.",
          "106.",
          "108.",
          "110."
        ],
        "correctIndex": 3,
        "explanation": "Antes da campanha: • Total com pelo menos um vício = T + A - (T &cap; A) = 130 + 150 - 40 = 240 pessoas. • Redução de 20% após a campanha: 240 &middot; 0,80 = 192 pessoas continuaram com pelo menos um vício. • Novo número de pessoas sem nenhum vício: 300 - 192 = 108 pessoas.",
        "contentHtml": "<strong>Questão 8 (UFPB ADAPTADO)</strong><br><br>\n                Antes da realização de uma campanha de conscientização de qualidade de vida, a Secretaria de Saúde de um município fez algumas observações de campo e notou que, dos 300 indivíduos analisados, 130 eram tabagistas, 150 eram alcoólatras e 40 tinham esses dois vícios.<br>\n                Após a campanha, o número de pessoas que apresentaram, pelo menos, um dos dois vícios sofreu uma redução de 20%.<br>\n                Com base nessas informações, conclui-se que com essa redução, o número de pessoas sem qualquer um desses vícios passou a ser:",
        "optionsHtml": [
          "102.",
          "104.",
          "106.",
          "108.",
          "110."
        ],
        "explanationHtml": "Antes da campanha:<br>• Total com pelo menos um vício = T + A - (T &cap; A) = 130 + 150 - 40 = 240 pessoas.<br>• Redução de 20% após a campanha: 240 &middot; 0,80 = 192 pessoas continuaram com pelo menos um vício.<br>• Novo número de pessoas sem nenhum vício: 300 - 192 = 108 pessoas."
      }
    ],
    "simulado2": [
      {
        "id": "unit3_simulado2_1",
        "text": "Questão 1 (ENEM) Devido ao não cumprimento das metas definidas para a campanha de vacinação contra a gripe comum e o vírus H1N1 em um ano, o Ministério da Saúde anunciou a prorrogação da campanha por mais uma semana. A tabela apresenta as quantidades de pessoas vacinadas dentre os cinco grupos de risco até a data de início da prorrogação da campanha. Grupo de risco População (milhão) População já vacinada (milhão) (%) Crianças 4,5 0,9 20 Profissionais da Saúde 2,0 1,0 50 Gestantes 2,5 1,5 60 Indígenas 0,5 0,4 80 Idosos 20,5 8,2 40 Qual é a porcentagem aproximada do total de pessoas vacinadas em relação à população total dos cinco grupos de risco?",
        "options": [
          "30%",
          "40%",
          "50%",
          "60%",
          "70%"
        ],
        "correctIndex": 1,
        "explanation": "População total = 4,5 + 2,0 + 2,5 + 0,5 + 20,5 = 30 milhões. Total vacinado = 0,9 + 1,0 + 1,5 + 0,4 + 8,2 = 12 milhões. Porcentagem = (12 &divide; 30) &times; 100 = 40%.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                Devido ao não cumprimento das metas definidas para a campanha de vacinação contra a gripe comum e o vírus H1N1 em um ano, o Ministério da Saúde anunciou a prorrogação da campanha por mais uma semana. A tabela apresenta as quantidades de pessoas vacinadas dentre os cinco grupos de risco até a data de início da prorrogação da campanha.<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95rem;\">\n                    <thead>\n                        <tr style=\"background-color: #ecffeb; color: #03ad3c; border-bottom: 2px solid #e5e7eb;\">\n                            <th style=\"padding: 10px; text-align: left;\">Grupo de risco</th>\n                            <th style=\"padding: 10px; text-align: center;\">População (milhão)</th>\n                            <th style=\"padding: 10px; text-align: center;\">População já vacinada (milhão)</th>\n                            <th style=\"padding: 10px; text-align: center;\">(%)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Crianças</td>\n                            <td style=\"padding: 10px; text-align: center;\">4,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">0,9</td>\n                            <td style=\"padding: 10px; text-align: center;\">20</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Profissionais da Saúde</td>\n                            <td style=\"padding: 10px; text-align: center;\">2,0</td>\n                            <td style=\"padding: 10px; text-align: center;\">1,0</td>\n                            <td style=\"padding: 10px; text-align: center;\">50</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Gestantes</td>\n                            <td style=\"padding: 10px; text-align: center;\">2,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">1,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">60</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Indígenas</td>\n                            <td style=\"padding: 10px; text-align: center;\">0,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">0,4</td>\n                            <td style=\"padding: 10px; text-align: center;\">80</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #edf2f7;\">\n                            <td style=\"padding: 10px;\">Idosos</td>\n                            <td style=\"padding: 10px; text-align: center;\">20,5</td>\n                            <td style=\"padding: 10px; text-align: center;\">8,2</td>\n                            <td style=\"padding: 10px; text-align: center;\">40</td>\n                        </tr>\n                    </tbody>\n                </table>\n                Qual é a porcentagem aproximada do total de pessoas vacinadas em relação à população total dos cinco grupos de risco?",
        "optionsHtml": [
          "30%",
          "40%",
          "50%",
          "60%",
          "70%"
        ],
        "explanationHtml": "População total = 4,5 + 2,0 + 2,5 + 0,5 + 20,5 = 30 milhões.<br>Total vacinado = 0,9 + 1,0 + 1,5 + 0,4 + 8,2 = 12 milhões.<br>Porcentagem = (12 &divide; 30) &times; 100 = 40%."
      },
      {
        "id": "unit3_simulado2_2",
        "text": "Questão 2 (ENEM) O acréscimo de tecnologias no sistema produtivo industrial tem por objetivo reduzir custos e aumentar a produtividade. No primeiro ano de funcionamento, uma indústria fabricou 8 000 unidades de um determinado product. No ano seguinte, investiu em tecnologia adquirindo novas máquinas e aumentou a produção em 50%. Estima-se que esse aumento percentual se repita nos próximos anos, garantindo um crescimento anual de 50%. Considere P a quantidade anual de produtos fabricados no ano t de funcionamento da indústria. Se a estimativa for alcançada, qual é a expressão que determina o número de unidades produzidas P em função de t para t &ge; 1?",
        "options": [
          "P(t) = 0,5t⁻¹ + 8 000",
          "P(t) = 50t⁻¹ + 8 000",
          "P(t) = 4 000t⁻¹ + 8 000",
          "P(t) = 8 000 &middot; (0,5) t-1",
          "P(t) = 8 000 &middot; (1,5) t-1"
        ],
        "correctIndex": 4,
        "explanation": "Como o crescimento é de 50% ao ano sobre o ano anterior, trata-se de uma função exponencial de fator (1 + 0,5) = 1,5. Para t = 1, P(1) deve ser 8000. A lei que modela é P(t) = 8000 &middot; (1,5) t-1 .",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                O acréscimo de tecnologias no sistema produtivo industrial tem por objetivo reduzir custos e aumentar a produtividade. No primeiro ano de funcionamento, uma indústria fabricou 8 000 unidades de um determinado product. No ano seguinte, investiu em tecnologia adquirindo novas máquinas e aumentou a produção em 50%. Estima-se que esse aumento percentual se repita nos próximos anos, garantindo um crescimento anual de 50%. Considere P a quantidade anual de produtos fabricados no ano t de funcionamento da indústria. Se a estimativa for alcançada, qual é a expressão que determina o número de unidades produzidas P em função de t para t &ge; 1?",
        "optionsHtml": [
          "P(t) = 0,5t⁻¹ + 8 000",
          "P(t) = 50t⁻¹ + 8 000",
          "P(t) = 4 000t⁻¹ + 8 000",
          "P(t) = 8 000 &middot; (0,5)<sup>t-1</sup>",
          "P(t) = 8 000 &middot; (1,5)<sup>t-1</sup>"
        ],
        "explanationHtml": "Como o crescimento é de 50% ao ano sobre o ano anterior, trata-se de uma função exponencial de fator (1 + 0,5) = 1,5. Para t = 1, P(1) deve ser 8000. A lei que modela é P(t) = 8000 &middot; (1,5)<sup>t-1</sup>."
      },
      {
        "id": "unit3_simulado2_3",
        "text": "Questão 3 (UERJ) Observe o anúncio a seguir, que apresenta descontos promocionais de uma loja. Admita que essa promoção obedece à seguinte sequência: &bull; primeiro desconto de 10% sobre o preço da mercadoria; &bull; segundo desconto de 10% sobre o valor após o primeiro desconto; &bull; desconto de R$ 100,00 sobre o valor após o segundo desconto. Determine o preço inicial de uma mercadoria cujo valor, após os três descontos, é igual a R$ 710,00.",
        "options": [
          "R$ 1 000,00.",
          "R$ 1 050,00.",
          "R$ 1 100,00.",
          "R$ 1 150,00.",
          "R$ 1 200,00."
        ],
        "correctIndex": 0,
        "explanation": "Fazendo o caminho reverso: Antes do desconto de R$ 100: 710 + 100 = R$ 810,00. Esse valor representa 90% após o segundo desconto: 810 &divide; 0,9 = R$ 900,00. Esse valor representa 90% do preço original: 900 &divide; 0,9 = R$ 1 000,00.",
        "contentHtml": "<strong>Questão 3 (UERJ)</strong><br><br>\n                Observe o anúncio a seguir, que apresenta descontos promocionais de uma loja.<br><br>\n                <img src=\"/imagens/mega.jpeg\" alt=\"Anúncio Mega Desconto\" class=\"img-center\"><br>\n                Admita que essa promoção obedece à seguinte sequência:<br>\n                &bull; primeiro desconto de 10% sobre o preço da mercadoria;<br>\n                &bull; segundo desconto de 10% sobre o valor após o primeiro desconto;<br>\n                &bull; desconto de R$ 100,00 sobre o valor após o segundo desconto.<br><br>\n                Determine o preço inicial de uma mercadoria cujo valor, após os três descontos, é igual a R$ 710,00.",
        "optionsHtml": [
          "R$ 1 000,00.",
          "R$ 1 050,00.",
          "R$ 1 100,00.",
          "R$ 1 150,00.",
          "R$ 1 200,00."
        ],
        "explanationHtml": "Fazendo o caminho reverso:<br>Antes do desconto de R$ 100: 710 + 100 = R$ 810,00.<br>Esse valor representa 90% após o segundo desconto: 810 &divide; 0,9 = R$ 900,00.<br>Esse valor representa 90% do preço original: 900 &divide; 0,9 = R$ 1 000,00."
      },
      {
        "id": "unit3_simulado2_4",
        "text": "Questão 4 (INÉDITA) No Brasil, foi criada uma forma irregular de empréstimo de dinheiro chamada agiotagem. É a prática de emprestar dinheiro sem autorização ou submissão às regulações das taxas normais. Na agiotagem, essas taxas são superiores à oficial de câmbio. Uma pessoa pegou emprestado com um agiota um capital de R$ 1 000,00 a ser pago daqui a três meses, a juros compostos cobrados da seguinte forma: 10% no primeiro mês; 15% no segundo mês e 20% no terceiro mês, nessa ordem. Ao final desses três meses o montante que essa pessoa estará devendo a esse agiota será de",
        "options": [
          "R$ 1 256,00.",
          "R$ 1 340,00.",
          "R$ 1 518,00.",
          "R$ 1 620,00.",
          "R$ 1 742,00."
        ],
        "correctIndex": 2,
        "explanation": "M = C &middot; (1 + i₁) &middot; (1 + i₂) &middot; (1 + i₃) M = 1000 &middot; 1,10 &middot; 1,15 &middot; 1,20 M = 1100 &middot; 1,15 &middot; 1,20 = 1265 &middot; 1,20 = R$ 1 518,00.",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n                No Brasil, foi criada uma forma irregular de empréstimo de dinheiro chamada agiotagem. É a prática de emprestar dinheiro sem autorização ou submissão às regulações das taxas normais. Na agiotagem, essas taxas são superiores à oficial de câmbio.<br>\n                Uma pessoa pegou emprestado com um agiota um capital de R$ 1 000,00 a ser pago daqui a três meses, a juros compostos cobrados da seguinte forma: 10% no primeiro mês; 15% no segundo mês e 20% no terceiro mês, nessa ordem. Ao final desses três meses o montante que essa pessoa estará devendo a esse agiota será de",
        "optionsHtml": [
          "R$ 1 256,00.",
          "R$ 1 340,00.",
          "R$ 1 518,00.",
          "R$ 1 620,00.",
          "R$ 1 742,00."
        ],
        "explanationHtml": "M = C &middot; (1 + i₁) &middot; (1 + i₂) &middot; (1 + i₃)<br>M = 1000 &middot; 1,10 &middot; 1,15 &middot; 1,20<br>M = 1100 &middot; 1,15 &middot; 1,20 = 1265 &middot; 1,20 = R$ 1 518,00."
      },
      {
        "id": "unit3_simulado2_5",
        "text": "Questão 5 (ENEM) A Secretaria de Saúde de um município avalia um programa que disponibiliza, para cada aluno de uma escola municipal, uma bicicleta, que deve ser usada no trajeto de ida e volta, entre sua casa e a escola. Na fase de implantação do programa, o aluno que morava mais distante da escola realizou sempre o mesmo trajeto, representado na figura, na escala 1 : 25 000, por um período de cinco dias. Quantos quilômetros esse aluno percorreu na fase de implantação do programa?",
        "options": [
          "4",
          "8",
          "16",
          "20",
          "40"
        ],
        "correctIndex": 3,
        "explanation": "Contando os segmentos na malha quadriculada da Casa até a Escola, temos 16 segmentos de 1 cm, totalizando 16 cm no desenho. Pela escala, 16 cm &times; 25.000 = 400.000 cm = 4 km por trajeto simples. Como ele fez ida e volta durante 5 dias, são 10 trajetos: 4 km &times; 10 = 40 km.",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                A Secretaria de Saúde de um município avalia um programa que disponibiliza, para cada aluno de uma escola municipal, uma bicicleta, que deve ser usada no trajeto de ida e volta, entre sua casa e a escola. Na fase de implantação do programa, o aluno que morava mais distante da escola realizou sempre o mesmo trajeto, representado na figura, na escala 1 : 25 000, por um período de cinco dias.<br><br>\n                <img src=\"/imagens/malha.jpeg\" class=\"img-center\" alt=\"Malha do trajeto\"><br>\n                Quantos quilômetros esse aluno percorreu na fase de implantação do programa?",
        "optionsHtml": [
          "4",
          "8",
          "16",
          "20",
          "40"
        ],
        "explanationHtml": "Contando os segmentos na malha quadriculada da Casa até a Escola, temos 16 segmentos de 1 cm, totalizando 16 cm no desenho. Pela escala, 16 cm &times; 25.000 = 400.000 cm = 4 km por trajeto simples. Como ele fez ida e volta durante 5 dias, são 10 trajetos: 4 km &times; 10 = 40 km."
      },
      {
        "id": "unit3_simulado2_6",
        "text": "Questão 6 (ENEM) As exportações de soja do Brasil totalizaram 4,129 milhões de toneladas no mês de julho de 2012, e registraram um aumento em relação ao mês de julho de 2011, embora tenha havido uma baixa em relação ao mês de maio de 2012. Disponível em: www.noticiasagricolas.com.br. Acesso em: 02 ago. 2012. A quantidade, em quilogramas, de soja exportada pelo Brasil no mês de julho de 2012 foi de",
        "options": [
          "4,129 &middot; 10³",
          "4,129 &middot; 10⁶",
          "4,129 &middot; 10⁹",
          "4,129 &middot; 10¹²",
          "4,129 &middot; 10¹⁵"
        ],
        "correctIndex": 2,
        "explanation": "1 milhão = 10⁶ e 1 tonelada = 10³ kg. Logo, 4,129 milhões de toneladas equivalem a 4,129 &times; 10⁶ &times; 10³ kg = 4,129 &times; 10⁹ kg.",
        "contentHtml": "<strong>Questão 6 (ENEM)</strong><br><br>\n                As exportações de soja do Brasil totalizaram 4,129 milhões de toneladas no mês de julho de 2012, e registraram um aumento em relação ao mês de julho de 2011, embora tenha havido uma baixa em relação ao mês de maio de 2012.<br><br>\n                <small>Disponível em: www.noticiasagricolas.com.br. Acesso em: 02 ago. 2012.</small><br><br>\n                A quantidade, em quilogramas, de soja exportada pelo Brasil no mês de julho de 2012 foi de",
        "optionsHtml": [
          "4,129 &middot; 10³",
          "4,129 &middot; 10⁶",
          "4,129 &middot; 10⁹",
          "4,129 &middot; 10¹²",
          "4,129 &middot; 10¹⁵"
        ],
        "explanationHtml": "1 milhão = 10⁶ e 1 tonelada = 10³ kg. Logo, 4,129 milhões de toneladas equivalem a 4,129 &times; 10⁶ &times; 10³ kg = 4,129 &times; 10⁹ kg."
      },
      {
        "id": "unit3_simulado2_7",
        "text": "Questão 7 (ENEM) A London Eye é uma enorme roda-gigante na capital inglesa. Por ser um dos monumentos construídos para celebrar a entrada do terceiro milênio, ela também é conhecida como Roda do Milênio. Um turista brasileiro, em visita à Inglaterra, perguntou a um londrino o diâmetro (destacado na imagem) da Roda do Milênio e ele respondeu que ele tem 443 pés. Disponível em: www.mapadelondres.org. Acesso em: 14 mai. 2015 (adaptado). Não habituado com a unidade pé, e querendo saber sua curiosidade, esse turista consultou um manual de unidades de medidas e constatou que 1 pé equivale a 12 polegadas, e que 1 polegada equivale a 2,54 cm. Após alguns cálculos de conversão, o turista ficou surpreendido com o resultado obtido em metros. Qual a medida que mais se aproxima do diâmetro da Roda do Milênio, em metro?",
        "options": [
          "53",
          "94",
          "113",
          "135",
          "145"
        ],
        "correctIndex": 3,
        "explanation": "Cálculo da conversão: 443 pés &times; 12 polegadas = 5.316 polegadas. Em centímetros: 5.316 &times; 2,54 cm = 13.502,64 cm. Em metros, isso corresponde a aproximadamente 135 metros.",
        "contentHtml": "<strong>Questão 7 (ENEM)</strong><br><br>\n                A London Eye é uma enorme roda-gigante na capital inglesa. Por ser um dos monumentos construídos para celebrar a entrada do terceiro milênio, ela também é conhecida como Roda do Milênio. Um turista brasileiro, em visita à Inglaterra, perguntou a um londrino o diâmetro (destacado na imagem) da Roda do Milênio e ele respondeu que ele tem 443 pés.<br><br>\n                <img src=\"/imagens/londoneye.jpeg\" class=\"img-center\" alt=\"London Eye\"><br>\n                <small>Disponível em: www.mapadelondres.org. Acesso em: 14 mai. 2015 (adaptado).</small><br><br>\n                Não habituado com a unidade pé, e querendo saber sua curiosidade, esse turista consultou um manual de unidades de medidas e constatou que 1 pé equivale a 12 polegadas, e que 1 polegada equivale a 2,54 cm. Após alguns cálculos de conversão, o turista ficou surpreendido com o resultado obtido em metros. Qual a medida que mais se aproxima do diâmetro da Roda do Milênio, em metro?",
        "optionsHtml": [
          "53",
          "94",
          "113",
          "135",
          "145"
        ],
        "explanationHtml": "Cálculo da conversão: 443 pés &times; 12 polegadas = 5.316 polegadas. Em centímetros: 5.316 &times; 2,54 cm = 13.502,64 cm. Em metros, isso corresponde a aproximadamente 135 metros."
      },
      {
        "id": "unit3_simulado2_8",
        "text": "Questão 8 (INÉDITA) Para a comemoração dos 30 anos de fundação, uma loja de eletrodomésticos lançou a promoção Discos Premiados. Para compras a partir de R$ 300,00, os clientes tinham direito de girar uma vez cada um dos três discos representados na roleta a seguir: Girando o disco maior, o participante concorre a uma torradeira (T); no disco médio, a um liquidificador (L) e no pequeno, a R$ 100,00 (R). Para ganhar cada um dos prêmios, basta que a parte colorida esteja posicionada sob a seta indicadora no fim do giro. Após o fim da promoção, a diretoria de marketing apresentou alguns dados acerca dos prêmios conquistados pelos 300 clientes participantes da promoção: 21 ganharam os três prêmios; 44 ganharam torradeira e liquidificador; 49 ganharam liquidificador e R$ 100,00; 66 ganharam torradeira e R$ 100,00; 98 ganharam uma torradeira; 153 ganharam um liquidificador; 184 ganharam R$ 100,00. O número de clientes participantes da promoção que não ganharam nenhum dos prêmios nos discos é igual a",
        "options": [
          "3.",
          "4.",
          "5.",
          "6.",
          "7."
        ],
        "correctIndex": 4,
        "explanation": "Utilizando o Princípio da Inclusão-Exclusão para 3 conjuntos: n(T &cup; L &cup; R) = n(T) + n(L) + n(R) - n(T &cap; L) - n(L &cap; R) - n(T &cap; R) + n(T &cap; L &cap; R) n(T &cup; L &cup; R) = 98 + 153 + 184 - 44 - 49 - 66 + 21 = 295. Clientes que não ganharam nenhum prêmio: 300 - 295 = 5.",
        "contentHtml": "<strong>Questão 8 (INÉDITA)</strong><br><br>\n                Para a comemoração dos 30 anos de fundação, uma loja de eletrodomésticos lançou a promoção Discos Premiados. Para compras a partir de R$ 300,00, os clientes tinham direito de girar uma vez cada um dos três discos representados na roleta a seguir:<br><br>\n                <img src=\"/imagens/roleta premios.jpeg\" alt=\"Roleta Discos Premiados\" class=\"img-center\"><br>\n                Girando o disco maior, o participante concorre a uma torradeira (T); no disco médio, a um liquidificador (L) e no pequeno, a R$ 100,00 (R). Para ganhar cada um dos prêmios, basta que a parte colorida esteja posicionada sob a seta indicadora no fim do giro. Após o fim da promoção, a diretoria de marketing apresentou alguns dados acerca dos prêmios conquistados pelos 300 clientes participantes da promoção: 21 ganharam os três prêmios; 44 ganharam torradeira e liquidificador; 49 ganharam liquidificador e R$ 100,00; 66 ganharam torradeira e R$ 100,00; 98 ganharam uma torradeira; 153 ganharam um liquidificador; 184 ganharam R$ 100,00.<br><br>\n                O número de clientes participantes da promoção que não ganharam nenhum dos prêmios nos discos é igual a",
        "optionsHtml": [
          "3.",
          "4.",
          "5.",
          "6.",
          "7."
        ],
        "explanationHtml": "Utilizando o Princípio da Inclusão-Exclusão para 3 conjuntos:<br>n(T &cup; L &cup; R) = n(T) + n(L) + n(R) - n(T &cap; L) - n(L &cap; R) - n(T &cap; R) + n(T &cap; L &cap; R)<br>n(T &cup; L &cup; R) = 98 + 153 + 184 - 44 - 49 - 66 + 21 = 295.<br>Clientes que não ganharam nenhum prêmio: 300 - 295 = 5."
      }
    ]
  },
  "unit4": {
    "avaliacao": [
      {
        "id": "unit4_avaliacao_1",
        "text": "Questão 1 (ENEM) A figura abaixo representa o boleto de cobrança da mensalidade de uma escola, referente ao mês de junho de 2008. Banco S.A. Local de Pagamento Pagável em qualquer agência bancária até a data de vencimento Vencimento 30/06/2008 Cedente Escola de Ensino Médio Agência/Cód. cedente Data documento 01/06/2008 Nosso número Uso do banco (=) Valor documento R$ 500,00 Instruções Observação: no caso de pagamento em atraso, cobrar multa de R$ 10,00 mais 40 centavos por dia de atraso. (-) Descontos (-) Outras deduções (+) Mora/Multa (+) Outros acréscimos (=) Valor Cobrado Se M(x) é o valor, em reais, da mensalidade a ser paga, em que x é o número de dias em atraso, então",
        "options": [
          "M(x) = 500 + 0,4x.",
          "M(x) = 500 + 10x.",
          "M(x) = 510 + 0,4x.",
          "M(x) = 510 + 40x.",
          "M(x) = 500 + 10,4x."
        ],
        "correctIndex": 2,
        "explanation": "O valor do documento é fixado em R$ 500,00. Havendo atraso (ou seja, se x > 0), adiciona-se uma taxa fixa (multa) de R$ 10,00 somada à parcela variável de R$ 0,40 por dia de atraso (0,4x). Logo, combinando os termos independentes fixos temos: 500 + 10 = 510. A equação resultante é M(x) = 510 + 0,4x.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                A figura abaixo representa o boleto de cobrança da mensalidade de uma escola, referente ao mês de junho de 2008.<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #edf2f7; font-size: 0.9rem;\">\n                    <tbody>\n                        <tr style=\"background-color: #f8fafc; border-bottom: 2px solid #2d3748;\">\n                            <td colspan=\"2\" style=\"padding: 8px;\"><strong>Banco S.A.</strong></td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">Local de Pagamento<br><strong>Pagável em qualquer agência bancária até a data de vencimento</strong></td>\n                            <td style=\"padding: 6px; width: 30%;\">Vencimento<br><strong>30/06/2008</strong></td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">Cedente<br><strong>Escola de Ensino Médio</strong></td>\n                            <td style=\"padding: 6px;\">Agência/Cód. cedente</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">Data documento<br><strong>01/06/2008</strong></td>\n                            <td style=\"padding: 6px;\">Nosso número</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">Uso do banco</td>\n                            <td style=\"padding: 6px; background-color: #f8fafc;\">(=) Valor documento<br><strong>R$ 500,00</strong></td>\n                        </tr>\n                        <tr>\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0; font-size: 0.85rem;\">Instruções<br><strong>Observação: no caso de pagamento em atraso, cobrar multa de R$ 10,00 mais 40 centavos por dia de atraso.</strong></td>\n                            <td style=\"padding: 6px; line-height: 1.8;\">(-) Descontos<br>(-) Outras deduções<br>(+) Mora/Multa<br>(+) Outros acréscimos<br><strong>(=) Valor Cobrado</strong></td>\n                        </tr>\n                    </tbody>\n                </table>\n                Se M(x) é o valor, em reais, da mensalidade a ser paga, em que x é o número de dias em atraso, então",
        "optionsHtml": [
          "M(x) = 500 + 0,4x.",
          "M(x) = 500 + 10x.",
          "M(x) = 510 + 0,4x.",
          "M(x) = 510 + 40x.",
          "M(x) = 500 + 10,4x."
        ],
        "explanationHtml": "O valor do documento é fixado em R$ 500,00. Havendo atraso (ou seja, se x > 0), adiciona-se uma taxa fixa (multa) de R$ 10,00 somada à parcela variável de R$ 0,40 por dia de atraso (0,4x). Logo, combinando os termos independentes fixos temos: 500 + 10 = 510. A equação resultante é M(x) = 510 + 0,4x."
      },
      {
        "id": "unit4_avaliacao_2",
        "text": "Questão 2 (ENEM) Os congestionamentos de trânsito constituem um problemático que aflige, todos os dias, milhares de motoristas brasileiros. O gráfico ilustra a situação, representando, ao longo de um intervalo definido de tempo, a variação da velocidade de um veículo durante um congestionamento. Quantos minutos o veículo permaneceu imóvel ao longo do intervalo de tempo total analisado?",
        "options": [
          "4.",
          "3.",
          "2.",
          "1.",
          "0."
        ],
        "correctIndex": 2,
        "explanation": "Para que o veículo fique imóvel, sua velocidade deve ser igual a zero. No gráfico, a velocidade é representada no eixo vertical (y). O veículo estará imóvel nos intervalos onde a linha do gráfico toca o eixo horizontal (tempo), indicando V = 0. Isso ocorre no intervalo de 6 a 8 minutos, totalizando 2 minutos de imobilidade.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                Os congestionamentos de trânsito constituem um problemático que aflige, todos os dias, milhares de motoristas brasileiros. O gráfico ilustra a situação, representando, ao longo de um intervalo definido de tempo, a variação da velocidade de um veículo durante um congestionamento.<br><br>\n                <img src=\"/imagens/grafico velocidade.jpeg\" alt=\"Gráfico de velocidade por tempo\" class=\"img-center\"><br>\n                Quantos minutos o veículo permaneceu imóvel ao longo do intervalo de tempo total analisado?",
        "optionsHtml": [
          "4.",
          "3.",
          "2.",
          "1.",
          "0."
        ],
        "explanationHtml": "Para que o veículo fique imóvel, sua velocidade deve ser igual a zero. No gráfico, a velocidade é representada no eixo vertical (y). O veículo estará imóvel nos intervalos onde a linha do gráfico toca o eixo horizontal (tempo), indicando V = 0. Isso ocorre no intervalo de 6 a 8 minutos, totalizando 2 minutos de imobilidade."
      },
      {
        "id": "unit4_avaliacao_3",
        "text": "Questão 3 (ENEM) As curvas de oferta e de demanda de um produto representam, respectivamente, as quantidades que vendedores e consumidores estão dispostos a comercializar em função do preço do produto. Em alguns casos, essas curvas podem ser representadas por retas. Suponha que as quantidades de oferta e de demanda de um produto sejam, respectivamente, representadas pelas equações: Qo = - 20 + 4P e Qd = 46 - 2P em que Qo é quantidade de oferta, Qd é a quantidade de demanda e P é o preço do produto. A partir dessas equações, de oferta e de demanda, os economistas encontram o preço de equilíbrio de mercado, ou seja, quando Qo e Qd se igualam. Para a situação descrita, qual o valor do preço de equilíbrio?",
        "options": [
          "5.",
          "11.",
          "13.",
          "23.",
          "33."
        ],
        "correctIndex": 1,
        "explanation": "Para encontrar o preço de equilíbrio, igualamos a quantidade de oferta à quantidade de demanda (Q_o = Q_d): -20 + 4P = 46 - 2P 4P + 2P = 46 + 20 6P = 66 P = 11. Logo, o preço de equilíbrio é 11.",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                As curvas de oferta e de demanda de um produto representam, respectivamente, as quantidades que vendedores e consumidores estão dispostos a comercializar em função do preço do produto. Em alguns casos, essas curvas podem ser representadas por retas. Suponha que as quantidades de oferta e de demanda de um produto sejam, respectivamente, representadas pelas equações:<br><br>\n                <div style=\"text-align: center; font-size: 1.1rem; margin-bottom: 15px; font-weight: bold;\">\n                    Qo = - 20 + 4P &nbsp; e &nbsp; Qd = 46 - 2P\n                </div>\n                em que Qo é quantidade de oferta, Qd é a quantidade de demanda e P é o preço do produto. A partir dessas equações, de oferta e de demanda, os economistas encontram o preço de equilíbrio de mercado, ou seja, quando Qo e Qd se igualam. Para a situação descrita, qual o valor do preço de equilíbrio?",
        "optionsHtml": [
          "5.",
          "11.",
          "13.",
          "23.",
          "33."
        ],
        "explanationHtml": "Para encontrar o preço de equilíbrio, igualamos a quantidade de oferta à quantidade de demanda (Q_o = Q_d):<br><br>-20 + 4P = 46 - 2P<br>4P + 2P = 46 + 20<br>6P = 66<br>P = 11.<br><br>Logo, o preço de equilíbrio é 11."
      },
      {
        "id": "unit4_avaliacao_4",
        "text": "Questão 4 (ENEM) O gráfico abaixo, obtido a partir de dados do Ministério do Meio Ambiente, mostra o crescimento do número de espécies da fauna brasileira ameaçadas de extinção. Se mantida, pelos próximos anos, a tendência de crescimento mostrada no gráfico, o número de espécies ameaçadas de extinção em 2011 será igual a",
        "options": [
          "465.",
          "493.",
          "498.",
          "538.",
          "699."
        ],
        "correctIndex": 2,
        "explanation": "O gráfico aponta um crescimento linear em um período de 24 anos (de 1983 a 2007). O aumento de espécies foi de 461 - 239 = 222 espécies. A taxa de crescimento anual é de 222 / 24 = 9,25 espécies por ano. De 2007 para 2011 decorrem 4 anos. O incremento será de 4 &times; 9,25 = 37 espécies. Portanto, o total em 2011 será de 461 + 37 = 498 espécies.",
        "contentHtml": "<strong>Questão 4 (ENEM)</strong><br><br>\n                O gráfico abaixo, obtido a partir de dados do Ministério do Meio Ambiente, mostra o crescimento do número de espécies da fauna brasileira ameaçadas de extinção.<br><br>\n                <img src=\"/imagens/especies extincao.jpeg\" alt=\"Gráfico do crescimento de espécies ameaçadas\" class=\"img-center\"><br>\n                Se mantida, pelos próximos anos, a tendência de crescimento mostrada no gráfico, o número de espécies ameaçadas de extinção em 2011 será igual a",
        "optionsHtml": [
          "465.",
          "493.",
          "498.",
          "538.",
          "699."
        ],
        "explanationHtml": "O gráfico aponta um crescimento linear em um período de 24 anos (de 1983 a 2007). O aumento de espécies foi de 461 - 239 = 222 espécies.<br>A taxa de crescimento anual é de 222 / 24 = 9,25 espécies por ano.<br>De 2007 para 2011 decorrem 4 anos. O incremento será de 4 &times; 9,25 = 37 espécies.<br>Portanto, o total em 2011 será de 461 + 37 = 498 espécies."
      },
      {
        "id": "unit4_avaliacao_5",
        "text": "Questão 5 (ENEM) Um posto de combustível vende 10 000 litros de álcool por dia a R$ 1,50 cada litro. Seu proprietário percebeu que, para cada centavo de desconto que concedia por litro, eram vendidos 100 litros a mais por dia. Por exemplo, no dia em que o preço do álcool foi R$ 1,48, foram vendidos 10 200 litros. Considerando x o valor, em centavos, do desconto dado no preço de cada litro, e V o valor, em R$, arrecadado por dia com a venda do álcool, então a expressão que relaciona V e x é",
        "options": [
          "V = 10 000 + 50x - x²",
          "V = 10 000 + 50x + x²",
          "V = 15 000 - 50x - x²",
          "V = 15 000 + 50x - x²",
          "V = 15 000 - 50x + x²"
        ],
        "correctIndex": 3,
        "explanation": "O preço por litro será (1,50 - 0,01x) e a quantidade vendida será (10 000 + 100x). Multiplicando o preço pela quantidade para achar a receita V: V = (1,50 - 0,01x)(10 000 + 100x) V = 15 000 + 150x - 100x - x² V = 15 000 + 50x - x².",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                Um posto de combustível vende 10 000 litros de álcool por dia a R$ 1,50 cada litro. Seu proprietário percebeu que, para cada centavo de desconto que concedia por litro, eram vendidos 100 litros a mais por dia. Por exemplo, no dia em que o preço do álcool foi R$ 1,48, foram vendidos 10 200 litros.<br><br>\n                Considerando x o valor, em centavos, do desconto dado no preço de cada litro, e V o valor, em R$, arrecadado por dia com a venda do álcool, então a expressão que relaciona V e x é",
        "optionsHtml": [
          "V = 10 000 + 50x - x²",
          "V = 10 000 + 50x + x²",
          "V = 15 000 - 50x - x²",
          "V = 15 000 + 50x - x²",
          "V = 15 000 - 50x + x²"
        ],
        "explanationHtml": "O preço por litro será (1,50 - 0,01x) e a quantidade vendida será (10 000 + 100x). Multiplicando o preço pela quantidade para achar a receita V:<br>V = (1,50 - 0,01x)(10 000 + 100x)<br>V = 15 000 + 150x - 100x - x²<br>V = 15 000 + 50x - x²."
      },
      {
        "id": "unit4_avaliacao_6",
        "text": "Questão 6 (ENEM) A temperatura T de um forno (em graus centígrados) é reduzida por um sistema a partir do instante de seu desligamento (t=0) e varia de acordo com a expressão T(t) = - t² 4 + 400, com t em minutos. Por motivos de segurança, a trava do forno só é liberada para abertura quando o forno atinge a temperatura de 39 °C. Qual o tempo mínimo de espera, em minutos, após desligar o forno, para que a porta possa ser aberta?",
        "options": [
          "19,0.",
          "19,8.",
          "20,0.",
          "38,0.",
          "39,0."
        ],
        "correctIndex": 3,
        "explanation": "Basta igualar a função T(t) a 39 °C: 39 = -t²/4 + 400 &rArr; t²/4 = 400 - 39 &rArr; t²/4 = 361 t² = 361 * 4 &rArr; t² = 1444 &rArr; t = &radic;1444 = 38 minutos.",
        "contentHtml": "<strong>Questão 6 (ENEM)</strong><br><br>\n                A temperatura T de um forno (em graus centígrados) é reduzida por um sistema a partir do instante de seu desligamento (t=0) e varia de acordo com a expressão T(t) = -<div class=\"frac\"><span>t²</span><span class=\"nominator\"></span><span>4</span></div> + 400, com t em minutos. Por motivos de segurança, a trava do forno só é liberada para abertura quando o forno atinge a temperatura de 39 °C.<br><br>\n                Qual o tempo mínimo de espera, em minutos, após desligar o forno, para que a porta possa ser aberta?",
        "optionsHtml": [
          "19,0.",
          "19,8.",
          "20,0.",
          "38,0.",
          "39,0."
        ],
        "explanationHtml": "Basta igualar a função T(t) a 39 °C:<br>39 = -t²/4 + 400 &rArr; t²/4 = 400 - 39 &rArr; t²/4 = 361<br>t² = 361 * 4 &rArr; t² = 1444 &rArr; t = &radic;1444 = 38 minutos."
      },
      {
        "id": "unit4_avaliacao_7",
        "text": "Questão 7 (INÉDITA) Hoje, o saque no voleibol é uma arma muito potente para definir um ponto. Um jogador de vôlei fez um saque em que a bola foi lançada a uma altura de 2 m do chão, com trajetória parabólica, e atingiu altura máxima bem acima da rede, como mostra a figura. Considere um sistema de coordenadas cartesianas ortogonal, de tal modo que o eixo das abscissas está no plano do chão e o eixo das ordenadas está no plano da rede, e os dois eixos estão no mesmo plano que a trajetória da bola. Sabendo que a bola descreve uma trajetória com equação da parábola dada por f(x) = - 1 81 x² + 3 e que a linha de zona de ataque dista 3 m da linha de meio da quadra, a altura em que a bola passou na linha de zona de ataque da quadra adversária foi aproximadamente",
        "options": [
          "2 m.",
          "2,5 m.",
          "2,9 m.",
          "3,1 m.",
          "3,5 m."
        ],
        "correctIndex": 2,
        "explanation": "Como o eixo das ordenadas (y) está na rede (meio da quadra), a linha da zona de ataque da quadra adversária localiza-se na posição x = 3. Substituindo x = 3 na equação da trajetória: f(3) = -(1/81)(3)² + 3 = -(1/81)(9) + 3 = -1/9 + 3 = -0,11 + 3 &asymp; 2,89 m. Portanto, aproximadamente 2,9 m.",
        "contentHtml": "<strong>Questão 7 (INÉDITA)</strong><br><br>\n                Hoje, o saque no voleibol é uma arma muito potente para definir um ponto. Um jogador de vôlei fez um saque em que a bola foi lançada a uma altura de 2 m do chão, com trajetória parabólica, e atingiu altura máxima bem acima da rede, como mostra a figura.<br><br>\n                Considere um sistema de coordenadas cartesianas ortogonal, de tal modo que o eixo das abscissas está no plano do chão e o eixo das ordenadas está no plano da rede, e os dois eixos estão no mesmo plano que a trajetória da bola. Sabendo que a bola descreve uma trajetória com equação da parábola dada por f(x) = -<div class=\"frac\"><span>1</span><span class=\"nominator\"></span><span>81</span></div>x² + 3 e que a linha de zona de ataque dista 3 m da linha de meio da quadra, a altura em que a bola passou na linha de zona de ataque da quadra adversária foi aproximadamente",
        "optionsHtml": [
          "2 m.",
          "2,5 m.",
          "2,9 m.",
          "3,1 m.",
          "3,5 m."
        ],
        "explanationHtml": "Como o eixo das ordenadas (y) está na rede (meio da quadra), a linha da zona de ataque da quadra adversária localiza-se na posição x = 3. Substituindo x = 3 na equação da trajetória:<br>f(3) = -(1/81)(3)² + 3 = -(1/81)(9) + 3 = -1/9 + 3 = -0,11 + 3 &asymp; 2,89 m. Portanto, aproximadamente 2,9 m."
      },
      {
        "id": "unit4_avaliacao_8",
        "text": "Questão 8 (ENEM/PPL) Em um experimento, uma cultura de bactérias tem sua população reduzida pela metade a cada hora, devido à ação de um agente bactericida. Neste experimento, o número de bactérias em função do tempo pode ser modelado por uma função do tipo",
        "options": [
          "afim.",
          "seno.",
          "cosseno.",
          "logarítmica crescente.",
          "exponencial."
        ],
        "correctIndex": 4,
        "explanation": "Como a população reduz-se pela metade a cada intervalo de tempo fixo (1 hora), a taxa de decrescimento é proporcional ao valor atual della população. Fenômenos em que o valor é multiplicado/dividido por um fator constante a intervalos regulares são modelados por funções exponenciais.",
        "contentHtml": "<strong>Questão 8 (ENEM/PPL)</strong><br><br>\n                Em um experimento, uma cultura de bactérias tem sua população reduzida pela metade a cada hora, devido à ação de um agente bactericida. Neste experimento, o número de bactérias em função do tempo pode ser modelado por uma função do tipo",
        "optionsHtml": [
          "afim.",
          "seno.",
          "cosseno.",
          "logarítmica crescente.",
          "exponencial."
        ],
        "explanationHtml": "Como a população reduz-se pela metade a cada intervalo de tempo fixo (1 hora), a taxa de decrescimento é proporcional ao valor atual della população. Fenômenos em que o valor é multiplicado/dividido por um fator constante a intervalos regulares são modelados por funções exponenciais."
      },
      {
        "id": "unit4_avaliacao_9",
        "text": "Questão 9 (ENEM/PPL) A torre de Hanói é um jogo que tem o objetivo de mover todos os discos de uma haste para outra, utilizando o menor número possível de movimento, respeitando-se as regras. As regras são: 1 – um disco maior não pode ser colocado sobre um disco menor; 2 – pode-se mover um único disco por vez; 3 – um disco deve estar sempre em uma das três hastes ou em movimento. Disponível em: www.uime.usp.br. Acesso em: 28 abr. 2010 (adaptado). Disponível em: www.realidadevirtual.com.br. Acesso em: 28 abr. 2010 (adaptado). Usando a torre de Hanói e baseando-se nas regras do jogo, podemos montar uma tabela entre o número de peças (X) e o número mínimo de movimentos (Y): NÚMERO DE PEÇAS NÚMERO MÍNIMO DE MOVIMENTOS 1 1 2 3 3 7 4 15 A relação entre (X) e (Y) é",
        "options": [
          "Y = 2 X - 1",
          "Y = 2 X - 1",
          "Y = 2 X",
          "Y = 2X - 1",
          "Y = 2X - 4"
        ],
        "correctIndex": 0,
        "explanation": "Analisando os valores fornecidos na tabela: • Para $X=1 \\implies Y = 2^1 - 1 = 1$ • Para $X=2 \\implies Y = 2^2 - 1 = 3$ • Para $X=3 \\implies Y = 2^3 - 1 = 7$ • Para $X=4 \\implies Y = 2^4 - 1 = 15$ A lei matemática correspondente que modela o comportamento padrão do jogo é $Y = 2^X - 1$.",
        "contentHtml": "<strong>Questão 9 (ENEM/PPL)</strong><br><br>\n                A torre de Hanói é um jogo que tem o objetivo de mover todos os discos de uma haste para outra, utilizando o menor número possível de movimento, respeitando-se as regras.<br><br>\n                <img src=\"/imagens/torre hanoi.jpeg\" alt=\"Torre de Hanói com 5 discos\" class=\"img-center\"><br>\n                As regras são:<br>\n                1 – um disco maior não pode ser colocado sobre um disco menor;<br>\n                2 – pode-se mover um único disco por vez;<br>\n                3 – um disco deve estar sempre em uma das três hastes ou em movimento.<br><br>\n                <small>Disponível em: www.uime.usp.br. Acesso em: 28 abr. 2010 (adaptado).<br>Disponível em: www.realidadevirtual.com.br. Acesso em: 28 abr. 2010 (adaptado).</small><br><br>\n                Usando a torre de Hanói e baseando-se nas regras do jogo, podemos montar uma tabela entre o número de peças (X) e o número mínimo de movimentos (Y):<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #edf2f7; text-align: center;\">\n                    <thead>\n                        <tr style=\"background-color: #f8fafc; border-bottom: 2px solid #2d3748;\">\n                            <th style=\"padding: 8px;\">NÚMERO DE PEÇAS</th>\n                            <th style=\"padding: 8px;\">NÚMERO MÍNIMO DE MOVIMENTOS</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">1</td>\n                            <td style=\"padding: 6px;\">1</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">2</td>\n                            <td style=\"padding: 6px;\">3</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">3</td>\n                            <td style=\"padding: 6px;\">7</td>\n                        </tr>\n                        <tr>\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">4</td>\n                            <td style=\"padding: 6px;\">15</td>\n                        </tr>\n                    </tbody>\n                </table>\n                A relação entre (X) e (Y) é",
        "optionsHtml": [
          "Y = 2<sup>X</sup> - 1",
          "Y = 2<sup>X - 1</sup>",
          "Y = 2<sup>X</sup>",
          "Y = 2X - 1",
          "Y = 2X - 4"
        ],
        "explanationHtml": "Analisando os valores fornecidos na tabela:<br>• Para $X=1 \\implies Y = 2^1 - 1 = 1$<br>• Para $X=2 \\implies Y = 2^2 - 1 = 3$<br>• Para $X=3 \\implies Y = 2^3 - 1 = 7$<br>• Para $X=4 \\implies Y = 2^4 - 1 = 15$<br>A lei matemática correspondente que modela o comportamento padrão do jogo é $Y = 2^X - 1$."
      },
      {
        "id": "unit4_avaliacao_10",
        "text": "Questão 10 (ENEM) O gerente de uma empresa aplicou R$ 2 000,00 em um fundo de investimento que rende juros compostos a uma taxa de 10% ao ano. Ele deseja acompanhar a evolução do seu montante ao longo do tempo. A expressão matemática que define o montante M(t), em reais, em função do tempo t, em anos, é",
        "options": [
          "M(t) = 2 000 + 0,1t",
          "M(t) = 2 000 + 200t",
          "M(t) = 2 000 &middot; (0,1) t",
          "M(t) = 2 000 &middot; (1,1) t",
          "M(t) = 2 000 &middot; (10) t"
        ],
        "correctIndex": 3,
        "explanation": "A fórmula matemática para o cálculo do montante sob regime de juros compostos é dada por M(t) = C &middot; (1 + i) t , onde C é o capital aplicado inicial e i representa a taxa de juros efetiva por período. Substituindo os dados (C = 2000 e i = 10% = 0,1), temos: M(t) = 2000 &middot; (1 + 0,1) t = 2000 &middot; (1,1) t .",
        "contentHtml": "<strong>Questão 10 (ENEM)</strong><br><br>\n                O gerente de uma empresa aplicou R$ 2 000,00 em um fundo de investimento que rende juros compostos a uma taxa de 10% ao ano. Ele deseja acompanhar a evolução do seu montante ao longo do tempo. A expressão matemática que define o montante M(t), em reais, em função do tempo t, em anos, é",
        "optionsHtml": [
          "M(t) = 2 000 + 0,1t",
          "M(t) = 2 000 + 200t",
          "M(t) = 2 000 &middot; (0,1)<sup>t</sup>",
          "M(t) = 2 000 &middot; (1,1)<sup>t</sup>",
          "M(t) = 2 000 &middot; (10)<sup>t</sup>"
        ],
        "explanationHtml": "A fórmula matemática para o cálculo do montante sob regime de juros compostos é dada por M(t) = C &middot; (1 + i)<sup>t</sup>, onde C é o capital aplicado inicial e i representa a taxa de juros efetiva por período. Substituindo os dados (C = 2000 e i = 10% = 0,1), temos:<br>M(t) = 2000 &middot; (1 + 0,1)<sup>t</sup> = 2000 &middot; (1,1)<sup>t</sup>."
      }
    ],
    "substituta": [
      {
        "id": "unit4_substituta_1",
        "text": "Questão 1 (ENEM) Leia este classificado: VENDEDORES JOVENS Fábrica de Lonas – Vendas no atacado Dez vagas para estudantes , 18 a 20 anos, sem experiência. Salário: R$ 300,00 fixo + comissão de R$ 0,50 por m² vendido. Contato: 0XX97-434211467 ou atacadista@lonaboa.com.br Na seleção para as vagas desse anúncio, feito por telefone ou correio eletrônico, propunha-se aos candidatos uma questão a ser resolvida na hora. Deveriam calcular seu salário no primeiro mês, se vendessem 500 m de tecido com largura de 1,40 m, e no segundo mês, se vendessem o dobro. Foram bem sucedidos os jovens que respondessem, respectivamente:",
        "options": [
          "R$ 300,00 e R$ 500,00.",
          "R$ 550,00 e R$ 850,00.",
          "R$ 650,00 e R$ 1 000,00.",
          "R$ 650,00 e R$ 1 300,00.",
          "R$ 950,00 e R$ 1 900,00."
        ],
        "correctIndex": 2,
        "explanation": "• No primeiro mês, a área total de lona vendida é: 500 m × 1,40 m = 700 m². A comissão gerada é: 700 × 0,50 = R$ 350,00. Somando ao fixo: 300 + 350 = R$ 650,00. • No segundo mês, vendeu-se o dobro do tecido, logo a área também dobra (1400 m²). A comissão passa a ser R$ 700,00. O salário final será: 300 + 700 = R$ 1 000,00.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                Leia este classificado:<br>\n                <blockquote style=\"background: #f8fafc; border-left: 4px solid #03ad3c; padding: 15px; margin-bottom: 20px;\">\n                    <strong>VENDEDORES JOVENS</strong><br>\n                    Fábrica de Lonas – Vendas no atacado<br>\n                    <strong>Dez vagas para estudantes</strong>, 18 a 20 anos, sem experiência.<br>\n                    <strong>Salário:</strong> R$ 300,00 fixo + comissão de R$ 0,50 por m² vendido.<br><br>\n                    Contato: 0XX97-434211467 ou atacadista@lonaboa.com.br\n                </blockquote>\n                Na seleção para as vagas desse anúncio, feito por telefone ou correio eletrônico, propunha-se aos candidatos uma questão a ser resolvida na hora. Deveriam calcular seu salário no primeiro mês, se vendessem 500 m de tecido com largura de 1,40 m, e no segundo mês, se vendessem o dobro. Foram bem sucedidos os jovens que respondessem, respectivamente:",
        "optionsHtml": [
          "R$ 300,00 e R$ 500,00.",
          "R$ 550,00 e R$ 850,00.",
          "R$ 650,00 e R$ 1 000,00.",
          "R$ 650,00 e R$ 1 300,00.",
          "R$ 950,00 e R$ 1 900,00."
        ],
        "explanationHtml": "• No primeiro mês, a área total de lona vendida é: 500 m × 1,40 m = 700 m².<br>A comissão gerada é: 700 × 0,50 = R$ 350,00. Somando ao fixo: 300 + 350 = R$ 650,00.<br>• No segundo mês, vendeu-se o dobro do tecido, logo a área também dobra (1400 m²). A comissão passa a ser R$ 700,00. O salário final será: 300 + 700 = R$ 1 000,00."
      },
      {
        "id": "unit4_substituta_2",
        "text": "Questão 2 (ENEM) O prefeito de uma cidade deseja construir uma rodovia para dar acesso a outro município. Para isso, foi aberta uma licitação na qual concorreram duas empresas. A primeira cobrou R$ 100 000,00 por km construído (n), acrescidos de um valor fixo de R$ 350 000,00, enquanto a segunda cobrou R$ 120 000,00 por km construído (n), acrescidos de um valor fixo de R$ 150 000,00. As duas empresas apresentam o mesmo padrão de qualidade dos serviços prestados, mas apenas uma delas poderá ser contratada. Do ponto de vista econômico, qual equação possibilitaria encontrar a extensão da rodovia que tornaria indiferente para a prefeitura escolher qualquer uma das propostas apresentadas?",
        "options": [
          "100n + 350 = 120n + 150.",
          "100n + 150 = 120n + 350.",
          "100(n + 350) = 120(n + 150).",
          "100(n + 350 000) = 120(n + 150 000).",
          "350(n + 100 000) = 150(n + 120 000)."
        ],
        "correctIndex": 0,
        "explanation": "Para ser indiferente, o custo total das duas empresas deve ser igual. Expressando os valores em milhares de reais: • Empresa 1: C₁(n) = 100n + 350 • Empresa 2: C₂(n) = 120n + 150 Igualando as duas funções lineares, obtemos a igualdade: 100n + 350 = 120n + 150.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                O prefeito de uma cidade deseja construir uma rodovia para dar acesso a outro município. Para isso, foi aberta uma licitação na qual concorreram duas empresas. A primeira cobrou R$ 100 000,00 por km construído (n), acrescidos de um valor fixo de R$ 350 000,00, enquanto a segunda cobrou R$ 120 000,00 por km construído (n), acrescidos de um valor fixo de R$ 150 000,00. As duas empresas apresentam o mesmo padrão de qualidade dos serviços prestados, mas apenas uma delas poderá ser contratada.<br>\n                Do ponto de vista econômico, qual equação possibilitaria encontrar a extensão da rodovia que tornaria indiferente para a prefeitura escolher qualquer uma das propostas apresentadas?",
        "optionsHtml": [
          "100n + 350 = 120n + 150.",
          "100n + 150 = 120n + 350.",
          "100(n + 350) = 120(n + 150).",
          "100(n + 350 000) = 120(n + 150 000).",
          "350(n + 100 000) = 150(n + 120 000)."
        ],
        "explanationHtml": "Para ser indiferente, o custo total das duas empresas deve ser igual. Expressando os valores em milhares de reais:<br>• Empresa 1: C₁(n) = 100n + 350<br>• Empresa 2: C₂(n) = 120n + 150<br>Igualando as duas funções lineares, obtemos a igualdade: 100n + 350 = 120n + 150."
      },
      {
        "id": "unit4_substituta_3",
        "text": "Questão 3 (ENEM) Um experimento consiste em colocar certa quantidade de bolas de vidro idênticas em um copo com água até certo nível e medir o nível da água, conforme ilustrado na figura a seguir. Como resultado do experimento, concluiu-se que o nível da água é função do número de bolas de vidro que são colocadas dentro do copo. O quadro a seguir mostra alguns resultados do experimento realizado. NÚMERO DE BOLAS (X) NÍVEL DE ÁGUA (Y) 5 6,35 cm 10 6,70 cm 15 7,05 cm Qual a expressão algébrica que permite calcular o nível da água (y) em função do número de bolas (x)?",
        "options": [
          "y = 30x.",
          "y = 25x + 20,2.",
          "y = 1,27x.",
          "y = 0,7x.",
          "y = 0,07x + 6."
        ],
        "correctIndex": 4,
        "explanation": "Anotamos a taxa de variação (coeficiente angular): a cada 5 bolas adicionadas, o nível da água sobe 0,35 cm (6,70 - 6,35). Assim, a taxa por bola é 0,35 / 5 = 0,07. Substituindo na equação da reta y = ax + b com x = 5 e y = 6,35: 6,35 = 0,07(5) + b &rArr; 6,35 = 0,35 + b &rArr; b = 6. Portanto, a equação correta é y = 0,07x + 6.",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                Um experimento consiste em colocar certa quantidade de bolas de vidro idênticas em um copo com água até certo nível e medir o nível da água, conforme ilustrado na figura a seguir. Como resultado do experimento, concluiu-se que o nível da água é função do número de bolas de vidro que são colocadas dentro do copo. O quadro a seguir mostra alguns resultados do experimento realizado.<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #edf2f7; font-size: 0.9rem; text-align: center;\">\n                    <thead>\n                        <tr style=\"background-color: #ecffeb; border-bottom: 2px solid #03ad3c;\">\n                            <th style=\"padding: 10px;\">NÚMERO DE BOLAS (X)</th>\n                            <th style=\"padding: 10px;\">NÍVEL DE ÁGUA (Y)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 8px;\">5</td>\n                            <td style=\"padding: 8px;\">6,35 cm</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 8px;\">10</td>\n                            <td style=\"padding: 8px;\">6,70 cm</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 8px;\">15</td>\n                            <td style=\"padding: 8px;\">7,05 cm</td>\n                        </tr>\n                    </tbody>\n                </table>\n                Qual a expressão algébrica que permite calcular o nível da água (y) em função do número de bolas (x)?",
        "optionsHtml": [
          "y = 30x.",
          "y = 25x + 20,2.",
          "y = 1,27x.",
          "y = 0,7x.",
          "y = 0,07x + 6."
        ],
        "explanationHtml": "Anotamos a taxa de variação (coeficiente angular): a cada 5 bolas adicionadas, o nível da água sobe 0,35 cm (6,70 - 6,35). Assim, a taxa por bola é 0,35 / 5 = 0,07.<br>Substituindo na equação da reta y = ax + b com x = 5 e y = 6,35:<br>6,35 = 0,07(5) + b &rArr; 6,35 = 0,35 + b &rArr; b = 6.<br>Portanto, a equação correta é y = 0,07x + 6."
      },
      {
        "id": "unit4_substituta_4",
        "text": "Questão 4 (INÉDITA) Arrumar a mala, imaginar o lugar, as pessoas que vamos encontrar e as possíveis situações que vamos viver, os abraços de despedida, a expectativa feliz das futuras novidades, tudo isso faz parte da viagem e é prazeroso vivê-lo. Pensando em viajar com sua família, Tarcísio fez uma pesquisa para alugar um veículo em três locadoras e anotou as informações passadas por elas. Locadora 1: cobra R$ 90,00 de diária mais R$ 0,25 por quilômetro rodado. Locadora 2: cobra R$ 100,00 de diária mais R$ 0,20 por quilômetro rodado. Locadora 3: cobra R$ 120,00 de diária sem custo adicional por quilometragem. Para poder utilizar o veículo, a fim de se deslocar entre as cidades que deseja visitar com sua família, Tarcísio optou pela locadora 3, por ser a mais econômica para realizar a viagem. Para que a economia seja possível, Tarcísio deverá percorrer com o veículo alugado uma quilometragem",
        "options": [
          "inferior a 100 km.",
          "exata de 100 km.",
          "superior a 100 km e inferior a 120 km.",
          "exata de 120 km.",
          "superior a 120 km."
        ],
        "correctIndex": 4,
        "explanation": "Vamos comparar o custo das locadoras para uma diária em função dos quilômetros rodados (x): • L1(x) = 90 + 0,25x • L2(x) = 100 + 0,20x • L3(x) = 120 Para a Locadora 3 ser mais vantajosa que a Locadora 2 (que é mais barata que a 1 em longas distâncias): 120 100 km. Para a Locadora 3 ser mais barata que a Locadora 1: 120 120 km. Portanto, para ela ser a mais econômica de todas, a quilometragem obrigatoriamente deve ser superior a 120 km.",
        "contentHtml": "<strong>Questão 4 (INÉDITA)</strong><br><br>\n                Arrumar a mala, imaginar o lugar, as pessoas que vamos encontrar e as possíveis situações que vamos viver, os abraços de despedida, a expectativa feliz das futuras novidades, tudo isso faz parte da viagem e é prazeroso vivê-lo.<br>\n                Pensando em viajar com sua família, Tarcísio fez uma pesquisa para alugar um veículo em três locadoras e anotou as informações passadas por elas.<br><br>\n                <ul>\n                    <li>Locadora 1: cobra R$ 90,00 de diária mais R$ 0,25 por quilômetro rodado.</li>\n                    <li>Locadora 2: cobra R$ 100,00 de diária mais R$ 0,20 por quilômetro rodado.</li>\n                    <li>Locadora 3: cobra R$ 120,00 de diária sem custo adicional por quilometragem.</li>\n                </ul><br>\n                Para poder utilizar o veículo, a fim de se deslocar entre as cidades que deseja visitar com sua família, Tarcísio optou pela locadora 3, por ser a mais econômica para realizar a viagem.<br>\n                Para que a economia seja possível, Tarcísio deverá percorrer com o veículo alugado uma quilometragem",
        "optionsHtml": [
          "inferior a 100 km.",
          "exata de 100 km.",
          "superior a 100 km e inferior a 120 km.",
          "exata de 120 km.",
          "superior a 120 km."
        ],
        "explanationHtml": "Vamos comparar o custo das locadoras para uma diária em função dos quilômetros rodados (x):<br>• L1(x) = 90 + 0,25x<br>• L2(x) = 100 + 0,20x<br>• L3(x) = 120<br><br>Para a Locadora 3 ser mais vantajosa que a Locadora 2 (que é mais barata que a 1 em longas distâncias):<br>120 < 100 + 0,20x &rArr; 20 < 0,20x &rArr; x > 100 km.<br>Para a Locadora 3 ser mais barata que a Locadora 1:<br>120 < 90 + 0,25x &rArr; 30 < 0,25x &rArr; x > 120 km.<br>Portanto, para ela ser a mais econômica de todas, a quilometragem obrigatoriamente deve ser superior a 120 km."
      },
      {
        "id": "unit4_substituta_5",
        "text": "Questão 5 (ENEM) Para evitar uma epidemia, a Secretaria de Saúde de uma cidade dedetizou todos os bairros, de modo a evitar a proliferação do mosquito da dengue. Sabe-se que o número f de infectados é dado pela função f(t) = -2t² + 120t (em que t é expresso em dia e t = 0 é o dia anterior à primeira infecção) e que tal expressão é válida para os 60 primeiros dias da epidemia. A Secretaria de Saúde decidiu que uma segunda dedetização deveria ser feita no dia em que o número de infectados chegasse à marca de 1 600 pessoas, e uma segunda dedetização precisou acontecer. A segunda dedetização começou no",
        "options": [
          "19º dia.",
          "20º dia.",
          "29º dia.",
          "30º dia.",
          "60º dia."
        ],
        "correctIndex": 1,
        "explanation": "Igualamos a função a 1600: -2t² + 120t = 1600 &rArr; -2t² + 120t - 1600 = 0. Dividindo tudo por -2: t² - 60t + 800 = 0. Utilizando Bhaskara ou Soma e Produto, encontramos as raízes t = 20 e t = 40. Como enunciado diz que a dedetização ocorreu no dia em que o número atingiu a marca, considera-se a primeira ocorrência, ou seja, no 20º dia.",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                Para evitar uma epidemia, a Secretaria de Saúde de uma cidade dedetizou todos os bairros, de modo a evitar a proliferação do mosquito da dengue. Sabe-se que o número f de infectados é dado pela função f(t) = -2t² + 120t (em que t é expresso em dia e t = 0 é o dia anterior à primeira infecção) e que tal expressão é válida para os 60 primeiros dias da epidemia.<br><br>\n                A Secretaria de Saúde decidiu que uma segunda dedetização deveria ser feita no dia em que o número de infectados chegasse à marca de 1 600 pessoas, e uma segunda dedetização precisou acontecer.<br>\n                A segunda dedetização começou no",
        "optionsHtml": [
          "19º dia.",
          "20º dia.",
          "29º dia.",
          "30º dia.",
          "60º dia."
        ],
        "explanationHtml": "Igualamos a função a 1600: -2t² + 120t = 1600 &rArr; -2t² + 120t - 1600 = 0.<br>Dividindo tudo por -2: t² - 60t + 800 = 0.<br>Utilizando Bhaskara ou Soma e Produto, encontramos as raízes t = 20 e t = 40. Como enunciado diz que a dedetização ocorreu no dia em que o número atingiu a marca, considera-se a primeira ocorrência, ou seja, no 20º dia."
      },
      {
        "id": "unit4_substituta_6",
        "text": "Questão 6 (ENEM) Um estudante está pesquisando o desenvolvimento de certo tipo de bactéria. Para essa pesquisa, ele utiliza uma estufa para armazenar as bactérias. A temperatura no interior dessa estufa, em graus Celsius, é dada pela expressão T(h) = -h² + 22h - 85, em que h representa as horas do dia. Sabe-se que o número de bactérias é o maior possível quando a estufa atinge sua temperatura máxima e, nesse momento, ele deve retirá-las da estufa. A tabela associa intervalos de temperatura, em graus Celsius, com as classificações: muito baixa, baixa, média, alta e muito alta. INTERVALOS DE TEMPERATURA (°C) CLASSIFICAÇÃO T < 0 Muito baixa 0 &le; T &le; 17 Baixa 17 < T < 30 Média 30 &le; T &le; 43 Alta T > 43 Muito Alta Quando o estudante obtém o maior número possível de bactérias, a temperatura no interior da estufa está classificada como",
        "options": [
          "muito baixa.",
          "baixa.",
          "média.",
          "alta.",
          "muito alta."
        ],
        "correctIndex": 3,
        "explanation": "Primeiro determinamos a hora h do vértice que gera o valor máximo: h_v = -b/(2a) = -22 / (2 * -1) = 11h. Substituindo h = 11 na função para achar a temperatura máxima: T(11) = -(11)² + 22(11) - 85 = -121 + 242 - 85 = 36 °C. Analisando a tabela, 36 °C está no intervalo 30 &le; T &le; 43, correspondente à classificação 'alta'.",
        "contentHtml": "<strong>Questão 6 (ENEM)</strong><br><br>\n                Um estudante está pesquisando o desenvolvimento de certo tipo de bactéria. Para essa pesquisa, ele utiliza uma estufa para armazenar as bactérias. A temperatura no interior dessa estufa, em graus Celsius, é dada pela expressão T(h) = -h² + 22h - 85, em que h representa as horas do dia. Sabe-se que o número de bactérias é o maior possível quando a estufa atinge sua temperatura máxima e, nesse momento, ele deve retirá-las da estufa. A tabela associa intervalos de temperatura, em graus Celsius, com as classificações: muito baixa, baixa, média, alta e muito alta.<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #edf2f7; font-size: 0.9rem; text-align: center;\">\n                    <thead>\n                        <tr style=\"background-color: #f8fafc; border-bottom: 2px solid #03ad3c;\">\n                            <th style=\"padding: 8px;\">INTERVALOS DE TEMPERATURA (°C)</th>\n                            <th style=\"padding: 8px;\">CLASSIFICAÇÃO</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px;\">T &lt; 0</td><td>Muito baixa</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px;\">0 &le; T &le; 17</td><td>Baixa</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px;\">17 &lt; T &lt; 30</td><td>Média</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px;\">30 &le; T &le; 43</td><td>Alta</td>\n                        </tr>\n                        <tr>\n                            <td style=\"padding: 6px;\">T &gt; 43</td><td>Muito Alta</td>\n                        </tr>\n                    </tbody>\n                </table>\n                Quando o estudante obtém o maior número possível de bactérias, a temperatura no interior da estufa está classificada como",
        "optionsHtml": [
          "muito baixa.",
          "baixa.",
          "média.",
          "alta.",
          "muito alta."
        ],
        "explanationHtml": "Primeiro determinamos a hora h do vértice que gera o valor máximo: h_v = -b/(2a) = -22 / (2 * -1) = 11h.<br>Substituindo h = 11 na função para achar a temperatura máxima: T(11) = -(11)² + 22(11) - 85 = -121 + 242 - 85 = 36 °C.<br>Analisando a tabela, 36 °C está no intervalo 30 &le; T &le; 43, correspondente à classificação 'alta'."
      },
      {
        "id": "unit4_substituta_7",
        "text": "Questão 7 (ENEM) A parte interior de uma taça foi gerada pela rotação de uma parábola em torno de um eixo z, conforme mostra a figura. A função real que expressa a parábola, no plano cartesiano da figura, é dada pela lei f(x) = 3 2 x² - 6x + C, onde C é a medida da altura do líquido contido na taça, em centímetros. Sabe-se que o ponto V, na figura, representa o vértice da parábola, localizado sobre o eixo x. Nessas condições, a altura do líquido contido na taça, em centímetros, é",
        "options": [
          "1.",
          "2.",
          "4.",
          "5.",
          "6."
        ],
        "correctIndex": 4,
        "explanation": "Como o vértice V está localizado sobre o eixo x, a ordenada do vértice é nula (y_v = 0), o que implica que o discriminante (&Delta;) é igual a zero. &Delta; = b² - 4ac = 0 &rArr; (-6)² - 4 * (3/2) * C = 0 36 - 6C = 0 &rArr; 6C = 36 &rArr; C = 6 cm.",
        "contentHtml": "<strong>Questão 7 (ENEM)</strong><br><br>\n                A parte interior de uma taça foi gerada pela rotação de uma parábola em torno de um eixo z, conforme mostra a figura.<br><br>\n                <img src=\"/imagens/taca.jpeg\" alt=\"Representação geométrica da taça\" class=\"img-center\"><br>\n                A função real que expressa a parábola, no plano cartesiano da figura, é dada pela lei f(x) = <div class=\"frac\"><span>3</span><span class=\"nominator\"></span><span>2</span></div>x² - 6x + C, onde C é a medida da altura do líquido contido na taça, em centímetros. Sabe-se que o ponto V, na figura, representa o vértice da parábola, localizado sobre o eixo x.<br><br>\n                Nessas condições, a altura do líquido contido na taça, em centímetros, é",
        "optionsHtml": [
          "1.",
          "2.",
          "4.",
          "5.",
          "6."
        ],
        "explanationHtml": "Como o vértice V está localizado sobre o eixo x, a ordenada do vértice é nula (y_v = 0), o que implica que o discriminante (&Delta;) é igual a zero.<br>&Delta; = b² - 4ac = 0 &rArr; (-6)² - 4 * (3/2) * C = 0<br>36 - 6C = 0 &rArr; 6C = 36 &rArr; C = 6 cm."
      },
      {
        "id": "unit4_substituta_8",
        "text": "Questão 8 (ENEM) Ao abrir um negócio, um microempresário descreveu suas vendas, em milhares de reais (unidade monetária brasileira), durante os dois primeiros anos. No primeiro ano, suas vendas cresceram de modo linear. Posteriormente, ele decidiu investir em propaganda, o que fez suas vendas crescerem de modo exponencial. Qual é o gráfico que melhor descreve as vendas em função do tempo?",
        "options": [
          "",
          "",
          "",
          "",
          ""
        ],
        "correctIndex": 3,
        "explanation": "O comportamento das vendas é dividido em duas partes distintas: 1. No primeiro ano ($0 \\le t \\le 1$), o crescimento é linear, representado graficamente por um segmento de linha reta inclinada. 2. No segundo ano ($1 < t \\le 2$), o crescimento torna-se exponencial, representado por uma curva com concavidade voltada para cima que cresce de forma acelerada. O gráfico D representa perfeitamente essa transição.",
        "contentHtml": "<strong>Questão 8 (ENEM)</strong><br><br>\n                Ao abrir um negócio, um microempresário descreveu suas vendas, em milhares de reais (unidade monetária brasileira), durante os dois primeiros anos. No primeiro ano, suas vendas cresceram de modo linear. Posteriormente, ele decidiu investir em propaganda, o que fez suas vendas crescerem de modo exponencial.<br><br>\n                Qual é o gráfico que melhor descreve as vendas em função do tempo?",
        "optionsHtml": [
          "<img src='/imagens/grafico_2a.jpeg' alt='Alternativa A' style='max-height: 100px; display: inline-block; vertical-align: middle;'>",
          "<img src='/imagens/grafico_2b.jpeg' alt='Alternativa B' style='max-height: 100px; display: inline-block; vertical-align: middle;'>",
          "<img src='/imagens/grafico_2c.jpeg' alt='Alternativa C' style='max-height: 100px; display: inline-block; vertical-align: middle;'>",
          "<img src='/imagens/grafico_2d.jpeg' alt='Alternativa D' style='max-height: 100px; display: inline-block; vertical-align: middle;'>",
          "<img src='/imagens/grafico_2e.jpeg' alt='Alternativa E' style='max-height: 100px; display: inline-block; vertical-align: middle;'>"
        ],
        "explanationHtml": "O comportamento das vendas é dividido em duas partes distintas:<br>1. No primeiro ano ($0 \\le t \\le 1$), o crescimento é linear, representado graficamente por um segmento de linha reta inclinada.<br>2. No segundo ano ($1 < t \\le 2$), o crescimento torna-se exponencial, representado por uma curva com concavidade voltada para cima que cresce de forma acelerada. O gráfico D representa perfeitamente essa transição."
      },
      {
        "id": "unit4_substituta_9",
        "text": "Questão 9 (ENEM) A duração do efeito de alguns fármacos está relacionada à sua meia-vida, tempo necessário para que a quantidade original do fármaco no organismo se reduza à metade. A cada intervalo de tempo correspondente a uma meia-vida, a quantidade de fármaco existente no organismo no final do intervalo é igual a 50% da quantidade do início desse intervalo. O gráfico acima representa, de forma genérica, o que acontece com a quantidade de fármaco no organismo humano ao longo do tempo. F. D. Fuchs e Cher i. Wannm Pharmacologia Clínica. Rio de Janeiro: Guanabara Koogan, 1992, p.40. A meia-vida do antibiótico Amoxicilina é de 1 hora. Assim, se uma dose desse antibiótico for injetada as 12 h em um paciente, o percentual dessa dose que restará em seu organismo às 13 h 30 min será aproximadamente de",
        "options": [
          "10%.",
          "15%.",
          "25%.",
          "35%.",
          "50%."
        ],
        "correctIndex": 3,
        "explanation": "• O intervalo de tempo de 12 h até 13 h 30 min é de 1h30min, o que equivale a 1,5 horas. • Como a meia-vida é de 1 hora, 1,5 horas equivalem a exatamente 1,5 meias-vidas. • Olhando no gráfico fornecido, localizamos no eixo horizontal (número de meias-vidas) o ponto médio entre 1 e 2, isto é, 1,5. Subindo verticalmente até a curva exponencial e projetando no eixo vertical, o percentual correspondente de fármaco restante se encontra entre 30% e 40%, sendo aproximadamente igual a 35%.",
        "contentHtml": "<strong>Questão 9 (ENEM)</strong><br><br>\n                A duração do efeito de alguns fármacos está relacionada à sua meia-vida, tempo necessário para que a quantidade original do fármaco no organismo se reduza à metade. A cada intervalo de tempo correspondente a uma meia-vida, a quantidade de fármaco existente no organismo no final do intervalo é igual a 50% da quantidade do início desse intervalo.<br><br>\n                <img src=\"/imagens/farmaco.jpeg\" alt=\"Gráfico de decaimento por meia-vida\" class=\"img-center\"><br>\n                O gráfico acima representa, de forma genérica, o que acontece com a quantidade de fármaco no organismo humano ao longo do tempo.<br><br>\n                <small>F. D. Fuchs e Cher i. Wannm Pharmacologia Clínica. Rio de Janeiro: Guanabara Koogan, 1992, p.40.</small><br><br>\n                A meia-vida do antibiótico Amoxicilina é de 1 hora. Assim, se uma dose desse antibiótico for injetada as 12 h em um paciente, o percentual dessa dose que restará em seu organismo às 13 h 30 min será aproximadamente de",
        "optionsHtml": [
          "10%.",
          "15%.",
          "25%.",
          "35%.",
          "50%."
        ],
        "explanationHtml": "• O intervalo de tempo de 12 h até 13 h 30 min é de 1h30min, o que equivale a 1,5 horas.<br>• Como a meia-vida é de 1 hora, 1,5 horas equivalem a exatamente 1,5 meias-vidas.<br>• Olhando no gráfico fornecido, localizamos no eixo horizontal (número de meias-vidas) o ponto médio entre 1 e 2, isto é, 1,5. Subindo verticalmente até a curva exponencial e projetando no eixo vertical, o percentual correspondente de fármaco restante se encontra entre 30% e 40%, sendo aproximadamente igual a 35%."
      },
      {
        "id": "unit4_substituta_10",
        "text": "Questão 10 (ENEM) O governo de uma cidade está preocupado com a possível epidemia de uma doença infectocontagiosa causada por bactéria. Para decidir que medidas tomar, deve calcular a velocidade de reprodução da bactéria. Em experiências laboratoriais de uma cultura bacteriana, inicialmente com 40 mil unidades, obteve-se a fórmula para a população: P(t) = 40 · 2 3t Em que t é o tempo, em hora, e P(t) é a população, em milhares de bactérias. Em relação à quantidade inicial de bactérias, após 20 minutos, a população será",
        "options": [
          "reduzida a um terço.",
          "reduzida à metade.",
          "reduzida a dois terços.",
          "duplicada.",
          "triplicada."
        ],
        "correctIndex": 3,
        "explanation": "• Primeiro convertemos 20 minutos para horas, dividindo por 60: t = 20/60 = 1/3 hora. • Substituindo t = 1/3 na lei de formação da função: P(1/3) = 40 · 2^(3 · 1/3) = 40 · 2¹ = 80 mil. • Como a população inicial era de 40 mil e passou para 80 mil, ela foi duplicada.",
        "contentHtml": "<strong>Questão 10 (ENEM)</strong><br><br>\n                O governo de uma cidade está preocupado com a possível epidemia de uma doença infectocontagiosa causada por bactéria. Para decidir que medidas tomar, deve calcular a velocidade de reprodução da bactéria. Em experiências laboratoriais de uma cultura bacteriana, inicialmente com 40 mil unidades, obteve-se a fórmula para a população:<br>\n                <div style=\"text-align: center; margin: 15px 0; font-weight: bold; font-size: 1.1rem;\">P(t) = 40 · 2<sup>3t</sup></div>\n                Em que t é o tempo, em hora, e P(t) é a população, em milhares de bactérias.<br>\n                Em relação à quantidade inicial de bactérias, após 20 minutos, a população será",
        "optionsHtml": [
          "reduzida a um terço.",
          "reduzida à metade.",
          "reduzida a dois terços.",
          "duplicada.",
          "triplicada."
        ],
        "explanationHtml": "• Primeiro convertemos 20 minutos para horas, dividindo por 60: t = 20/60 = 1/3 hora.<br>• Substituindo t = 1/3 na lei de formação da função:<br>P(1/3) = 40 · 2^(3 · 1/3) = 40 · 2¹ = 80 mil.<br>• Como a população inicial era de 40 mil e passou para 80 mil, ela foi duplicada."
      }
    ],
    "simulado1": [
      {
        "id": "unit4_simulado1_1",
        "text": "Questão 1 (ENEM) A figura abaixo representa o boleto de cobrança da mensalidade de uma escola, referente ao mês de junho de 2008. Banco S.A. Local de Pagamento Pagável em qualquer agência bancária até a data de vencimento Vencimento 30/06/2008 Cedente Escola de Ensino Médio Agência/Cód. cedente Data documento 01/06/2008 Nosso número Uso do banco (=) Valor documento R$ 500,00 Instruções Observação: no caso de pagamento em atraso, cobrar multa de R$ 10,00 mais 40 centavos por dia de atraso. (-) Descontos (-) Outras deduções (+) Mora/Multa (+) Outros acréscimos (=) Valor Cobrado Se M(x) é o valor, em reais, da mensalidade a ser paga, em que x é o número de dias em atraso, então",
        "options": [
          "M(x) = 500 + 0,4x.",
          "M(x) = 500 + 10x.",
          "M(x) = 510 + 0,4x.",
          "M(x) = 510 + 40x.",
          "M(x) = 500 + 10,4x."
        ],
        "correctIndex": 2,
        "explanation": "O valor do documento é fixado em R$ 500,00. Havendo atraso (ou seja, se x > 0), adiciona-se uma taxa fixa (multa) de R$ 10,00 somada à parcela variável de R$ 0,40 por dia de atraso (0,4x). Logo, combinando os termos independentes fixos temos: 500 + 10 = 510. A equação resultante é M(x) = 510 + 0,4x.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                A figura abaixo representa o boleto de cobrança da mensalidade de uma escola, referente ao mês de junho de 2008.<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #edf2f7; font-size: 0.9rem;\">\n                    <tbody>\n                        <tr style=\"background-color: #f8fafc; border-bottom: 2px solid #2d3748;\">\n                            <td colspan=\"2\" style=\"padding: 8px;\"><strong>Banco S.A.</strong></td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">Local de Pagamento<br><strong>Pagável em qualquer agência bancária até a data de vencimento</strong></td>\n                            <td style=\"padding: 6px; width: 30%;\">Vencimento<br><strong>30/06/2008</strong></td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">Cedente<br><strong>Escola de Ensino Médio</strong></td>\n                            <td style=\"padding: 6px;\">Agência/Cód. cedente</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">Data documento<br><strong>01/06/2008</strong></td>\n                            <td style=\"padding: 6px;\">Nosso número</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">Uso do banco</td>\n                            <td style=\"padding: 6px; background-color: #f8fafc;\">(=) Valor documento<br><strong>R$ 500,00</strong></td>\n                        </tr>\n                        <tr>\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0; font-size: 0.85rem;\">Instruções<br><strong>Observação: no caso de pagamento em atraso, cobrar multa de R$ 10,00 mais 40 centavos por dia de atraso.</strong></td>\n                            <td style=\"padding: 6px; line-height: 1.8;\">(-) Descontos<br>(-) Outras deduções<br>(+) Mora/Multa<br>(+) Outros acréscimos<br><strong>(=) Valor Cobrado</strong></td>\n                        </tr>\n                    </tbody>\n                </table>\n                Se M(x) é o valor, em reais, da mensalidade a ser paga, em que x é o número de dias em atraso, então",
        "optionsHtml": [
          "M(x) = 500 + 0,4x.",
          "M(x) = 500 + 10x.",
          "M(x) = 510 + 0,4x.",
          "M(x) = 510 + 40x.",
          "M(x) = 500 + 10,4x."
        ],
        "explanationHtml": "O valor do documento é fixado em R$ 500,00. Havendo atraso (ou seja, se x > 0), adiciona-se uma taxa fixa (multa) de R$ 10,00 somada à parcela variável de R$ 0,40 por dia de atraso (0,4x). Logo, combinando os termos independentes fixos temos: 500 + 10 = 510. A equação resultante é M(x) = 510 + 0,4x."
      },
      {
        "id": "unit4_simulado1_2",
        "text": "Questão 2 (ENEM) Leia este classificado: VENDEDORES JOVENS Fábrica de Lonas – Vendas no atacado Dez vagas para estudantes , 18 a 20 anos, sem experiência. Salário: R$ 300,00 fixo + comissão de R$ 0,50 por m² vendido. Contato: 0XX97-434211467 ou atacadista@lonaboa.com.br Na seleção para as vagas desse anúncio, feito por telefone ou correio eletrônico, propunha-se aos candidatos uma questão a ser resolvida na hora. Deveriam calcular seu salário no primeiro mês, se vendessem 500 m de tecido com largura de 1,40 m, e no segundo mês, se vendessem o dobro. Foram bem sucedidos os jovens que respondessem, respectively:",
        "options": [
          "R$ 300,00 e R$ 500,00.",
          "R$ 550,00 e R$ 850,00.",
          "R$ 650,00 e R$ 1 000,00.",
          "R$ 650,00 e R$ 1 300,00.",
          "R$ 950,00 e R$ 1 900,00."
        ],
        "correctIndex": 2,
        "explanation": "• No primeiro mês, a área total de lona vendida é: 500 m × 1,40 m = 700 m². A comissão gerada é: 700 × 0,50 = R$ 350,00. Somando ao fixo: 300 + 350 = R$ 650,00. • No segundo mês, vendeu-se o dobro do tecido, logo a área também dobra (1400 m²). A comissão passa a ser R$ 700,00. O salário final será: 300 + 700 = R$ 1 000,00.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                Leia este classificado:<br>\n                <blockquote style=\"background: #f8fafc; border-left: 4px solid #03ad3c; padding: 15px; margin-bottom: 20px;\">\n                    <strong>VENDEDORES JOVENS</strong><br>\n                    Fábrica de Lonas – Vendas no atacado<br>\n                    <strong>Dez vagas para estudantes</strong>, 18 a 20 anos, sem experiência.<br>\n                    <strong>Salário:</strong> R$ 300,00 fixo + comissão de R$ 0,50 por m² vendido.<br><br>\n                    Contato: 0XX97-434211467 ou atacadista@lonaboa.com.br\n                </blockquote>\n                Na seleção para as vagas desse anúncio, feito por telefone ou correio eletrônico, propunha-se aos candidatos uma questão a ser resolvida na hora. Deveriam calcular seu salário no primeiro mês, se vendessem 500 m de tecido com largura de 1,40 m, e no segundo mês, se vendessem o dobro. Foram bem sucedidos os jovens que respondessem, respectively:",
        "optionsHtml": [
          "R$ 300,00 e R$ 500,00.",
          "R$ 550,00 e R$ 850,00.",
          "R$ 650,00 e R$ 1 000,00.",
          "R$ 650,00 e R$ 1 300,00.",
          "R$ 950,00 e R$ 1 900,00."
        ],
        "explanationHtml": "• No primeiro mês, a área total de lona vendida é: 500 m × 1,40 m = 700 m².<br>A comissão gerada é: 700 × 0,50 = R$ 350,00. Somando ao fixo: 300 + 350 = R$ 650,00.<br>• No segundo mês, vendeu-se o dobro do tecido, logo a área também dobra (1400 m²). A comissão passa a ser R$ 700,00. O salário final será: 300 + 700 = R$ 1 000,00."
      },
      {
        "id": "unit4_simulado1_3",
        "text": "Questão 3 (ENEM) As curvas de oferta e de demanda de um produto representam, respectivamente, as quantidades que vendedores e consumidores estão dispostos a comercializar em função do preço do produto. Em alguns casos, essas curvas podem ser representadas por retas. Suponha que as quantidades de oferta e de demanda de um produto sejam, respectivamente, representadas pelas equações: Qo = - 20 + 4P e Qd = 46 - 2P em que Qo é quantidade de oferta, Qd é a quantidade de demanda e P é o preço do produto. A partir dessas equações, de oferta e de demanda, os economistas encontram o preço de equilíbrio de mercado, ou seja, quando Qo e Qd se igualam. Para a situação descrita, qual o valor do preço de equilíbrio?",
        "options": [
          "5.",
          "11.",
          "13.",
          "23.",
          "33."
        ],
        "correctIndex": 1,
        "explanation": "Para encontrar o preço de equilíbrio, igualamos a quantidade de oferta à quantidade de demanda (Q_o = Q_d): -20 + 4P = 46 - 2P 4P + 2P = 46 + 20 6P = 66 P = 11. Logo, o preço de equilíbrio é 11.",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                As curvas de oferta e de demanda de um produto representam, respectivamente, as quantidades que vendedores e consumidores estão dispostos a comercializar em função do preço do produto. Em alguns casos, essas curvas podem ser representadas por retas. Suponha que as quantidades de oferta e de demanda de um produto sejam, respectivamente, representadas pelas equações:<br><br>\n                <div style=\"text-align: center; font-size: 1.1rem; margin-bottom: 15px; font-weight: bold;\">\n                    Qo = - 20 + 4P &nbsp; e &nbsp; Qd = 46 - 2P\n                </div>\n                em que Qo é quantidade de oferta, Qd é a quantidade de demanda e P é o preço do produto. A partir dessas equações, de oferta e de demanda, os economistas encontram o preço de equilíbrio de mercado, ou seja, quando Qo e Qd se igualam. Para a situação descrita, qual o valor do preço de equilíbrio?",
        "optionsHtml": [
          "5.",
          "11.",
          "13.",
          "23.",
          "33."
        ],
        "explanationHtml": "Para encontrar o preço de equilíbrio, igualamos a quantidade de oferta à quantidade de demanda (Q_o = Q_d):<br><br>-20 + 4P = 46 - 2P<br>4P + 2P = 46 + 20<br>6P = 66<br>P = 11.<br><br>Logo, o preço de equilíbrio é 11."
      },
      {
        "id": "unit4_simulado1_4",
        "text": "Questão 4 (ENEM) Um experimento consiste em colocar certa quantidade de bolas de vidro idênticas em um copo com água até certo nível e medir o nível da água, conforme ilustrado na figura a seguir. Como resultado do experimento, concluiu-se que o nível da água é função do número de bolas de vidro que são colocadas dentro do copo. O quadro a seguir mostra alguns resultados do experimento realizado. NÚMERO DE BOLAS (X) NÍVEL DE ÁGUA (Y) 5 6,35 cm 10 6,70 cm 15 7,05 cm Qual a expressão algébrica que permite calcular o nível da água (y) em função do número de bolas (x)?",
        "options": [
          "y = 30x.",
          "y = 25x + 20,2.",
          "y = 1,27x.",
          "y = 0,7x.",
          "y = 0,07x + 6."
        ],
        "correctIndex": 4,
        "explanation": "Anotamos a taxa de variação (coeficiente angular): a cada 5 bolas adicionadas, o nível da água sobe 0,35 cm (6,70 - 6,35). Assim, a taxa por bola é 0,35 / 5 = 0,07. Substituindo na equação da reta y = ax + b com x = 5 e y = 6,35: 6,35 = 0,07(5) + b &rArr; 6,35 = 0,35 + b &rArr; b = 6. Portanto, a equação correta é y = 0,07x + 6.",
        "contentHtml": "<strong>Questão 4 (ENEM)</strong><br><br>\n                Um experimento consiste em colocar certa quantidade de bolas de vidro idênticas em um copo com água até certo nível e medir o nível da água, conforme ilustrado na figura a seguir. Como resultado do experimento, concluiu-se que o nível da água é função do número de bolas de vidro que são colocadas dentro do copo. O quadro a seguir mostra alguns resultados do experimento realizado.<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #edf2f7; font-size: 0.9rem; text-align: center;\">\n                    <thead>\n                        <tr style=\"background-color: #ecffeb; border-bottom: 2px solid #03ad3c;\">\n                            <th style=\"padding: 10px;\">NÚMERO DE BOLAS (X)</th>\n                            <th style=\"padding: 10px;\">NÍVEL DE ÁGUA (Y)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 8px;\">5</td>\n                            <td style=\"padding: 8px;\">6,35 cm</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 8px;\">10</td>\n                            <td style=\"padding: 8px;\">6,70 cm</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 8px;\">15</td>\n                            <td style=\"padding: 8px;\">7,05 cm</td>\n                        </tr>\n                    </tbody>\n                </table>\n                Qual a expressão algébrica que permite calcular o nível da água (y) em função do número de bolas (x)?",
        "optionsHtml": [
          "y = 30x.",
          "y = 25x + 20,2.",
          "y = 1,27x.",
          "y = 0,7x.",
          "y = 0,07x + 6."
        ],
        "explanationHtml": "Anotamos a taxa de variação (coeficiente angular): a cada 5 bolas adicionadas, o nível da água sobe 0,35 cm (6,70 - 6,35). Assim, a taxa por bola é 0,35 / 5 = 0,07.<br>Substituindo na equação da reta y = ax + b com x = 5 e y = 6,35:<br>6,35 = 0,07(5) + b &rArr; 6,35 = 0,35 + b &rArr; b = 6.<br>Portanto, a equação correta é y = 0,07x + 6."
      },
      {
        "id": "unit4_simulado1_5",
        "text": "Questão 5 (ENEM) Um posto de combustível vende 10 000 litros de álcool por dia a R$ 1,50 cada litro. Seu proprietário percebeu que, para cada centavo de desconto que concedia por litro, eram vendidos 100 litros a mais por dia. Por exemplo, no dia em que o preço do álcool foi R$ 1,48, foram vendidos 10 200 litros. Considerando x o valor, em centavos, do desconto dado no preço de cada litro, e V o valor, em R$, arrecadado por dia com a venda do álcool, então a expressão que relaciona V e x é",
        "options": [
          "V = 10 000 + 50x - x²",
          "V = 10 000 + 50x + x²",
          "V = 15 000 - 50x - x²",
          "V = 15 000 + 50x - x²",
          "V = 15 000 - 50x + x²"
        ],
        "correctIndex": 3,
        "explanation": "O preço por litro será (1,50 - 0,01x) e a quantidade vendida será (10 000 + 100x). Multiplicando o preço pela quantidade para achar a receita V: V = (1,50 - 0,01x)(10 000 + 100x) V = 15 000 + 150x - 100x - x² V = 15 000 + 50x - x².",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                Um posto de combustível vende 10 000 litros de álcool por dia a R$ 1,50 cada litro. Seu proprietário percebeu que, para cada centavo de desconto que concedia por litro, eram vendidos 100 litros a mais por dia. Por exemplo, no dia em que o preço do álcool foi R$ 1,48, foram vendidos 10 200 litros.<br><br>\n                Considerando x o valor, em centavos, do desconto dado no preço de cada litro, e V o valor, em R$, arrecadado por dia com a venda do álcool, então a expressão que relaciona V e x é",
        "optionsHtml": [
          "V = 10 000 + 50x - x²",
          "V = 10 000 + 50x + x²",
          "V = 15 000 - 50x - x²",
          "V = 15 000 + 50x - x²",
          "V = 15 000 - 50x + x²"
        ],
        "explanationHtml": "O preço por litro será (1,50 - 0,01x) e a quantidade vendida será (10 000 + 100x). Multiplicando o preço pela quantidade para achar a receita V:<br>V = (1,50 - 0,01x)(10 000 + 100x)<br>V = 15 000 + 150x - 100x - x²<br>V = 15 000 + 50x - x²."
      },
      {
        "id": "unit4_simulado1_6",
        "text": "Questão 6 (INÉDITA) Hoje, o saque no voleibol é uma arma muito potente para definir um ponto. Um jogador de vôlei fez um saque em que a bola foi lançada a uma altura de 2 m do chão, com trajetória parabólica, e atingiu altura máxima bem acima da rede, como mostra a figura: Considere um sistema de coordenadas cartesianas ortogonal, de tal modo que o eixo das abscissas está no plano do chão e o eixo das ordenadas está no plano da rede, e os dois eixos estão no mesmo plano que a trajetória da bola. Sabendo que a bola descreve uma trajetória com equação da parábola dada por f(x) = - 1 81 x² + 3 e que a linha de zona de ataque dista 3 m da linha de meio da quadra, a altura em que a bola passou na linha de zona de ataque da quadra adversária foi aproximadamente",
        "options": [
          "2 m.",
          "2,5 m.",
          "2,9 m.",
          "3,1 m.",
          "3,5 m."
        ],
        "correctIndex": 2,
        "explanation": "Como o eixo das ordenadas (y) está na rede (meio da quadra), a linha da zona de ataque da quadra adversária localiza-se na posição x = 3. Substituindo x = 3 na equação da trajetória: f(3) = -(1/81)(3)² + 3 = -(1/81)(9) + 3 = -1/9 + 3 = -0,11 + 3 &asymp; 2,89 m. Portanto, aproximadamente 2,9 m.",
        "contentHtml": "<strong>Questão 6 (INÉDITA)</strong><br><br>\n                Hoje, o saque no voleibol é uma arma muito potente para definir um ponto. Um jogador de vôlei fez um saque em que a bola foi lançada a uma altura de 2 m do chão, com trajetória parabólica, e atingiu altura máxima bem acima da rede, como mostra a figura:<br><br>\n                <img src=\"/imagens/volei.jpeg\" alt=\"Trajetória da bola na quadra de vôlei\" class=\"img-center\"><br>\n                Considere um sistema de coordenadas cartesianas ortogonal, de tal modo que o eixo das abscissas está no plano do chão e o eixo das ordenadas está no plano da rede, e os dois eixos estão no mesmo plano que a trajetória da bola. Sabendo que a bola descreve uma trajetória com equação da parábola dada por f(x) = -<div class=\"frac\"><span>1</span><span class=\"nominator\"></span><span>81</span></div>x² + 3 e que a linha de zona de ataque dista 3 m da linha de meio da quadra, a altura em que a bola passou na linha de zona de ataque da quadra adversária foi aproximadamente",
        "optionsHtml": [
          "2 m.",
          "2,5 m.",
          "2,9 m.",
          "3,1 m.",
          "3,5 m."
        ],
        "explanationHtml": "Como o eixo das ordenadas (y) está na rede (meio da quadra), a linha da zona de ataque da quadra adversária localiza-se na posição x = 3. Substituindo x = 3 na equação da trajetória:<br>f(3) = -(1/81)(3)² + 3 = -(1/81)(9) + 3 = -1/9 + 3 = -0,11 + 3 &asymp; 2,89 m. Portanto, aproximadamente 2,9 m."
      },
      {
        "id": "unit4_simulado1_7",
        "text": "Questão 7 (ENEM/PPL) Em um experimento, uma cultura de bactérias tem sua população reduzida pela metade a cada hora, devido à ação de um agente bactericida. Neste experimento, o número de bactérias em função do tempo pode ser modelado por uma função do tipo",
        "options": [
          "afim.",
          "seno.",
          "cosseno.",
          "logarítmica crescente.",
          "exponencial."
        ],
        "correctIndex": 4,
        "explanation": "Como a população reduz-se pela metade a cada intervalo de tempo fixo (1 hora), a taxa de decrescimento é proporcional ao valor atual della população. Fenômenos em que o valor é multiplicado/dividido por um fator constante a intervalos regulares são modelados por funções exponenciais da forma $P(t) = P_0 \\cdot (0,5)^t$.",
        "contentHtml": "<strong>Questão 7 (ENEM/PPL)</strong><br><br>\n                Em um experimento, uma cultura de bactérias tem sua população reduzida pela metade a cada hora, devido à ação de um agente bactericida. Neste experimento, o número de bactérias em função do tempo pode ser modelado por uma função do tipo",
        "optionsHtml": [
          "afim.",
          "seno.",
          "cosseno.",
          "logarítmica crescente.",
          "exponencial."
        ],
        "explanationHtml": "Como a população reduz-se pela metade a cada intervalo de tempo fixo (1 hora), a taxa de decrescimento é proporcional ao valor atual della população. Fenômenos em que o valor é multiplicado/dividido por um fator constante a intervalos regulares são modelados por funções <strong>exponenciais</strong> da forma $P(t) = P_0 \\cdot (0,5)^t$."
      },
      {
        "id": "unit4_simulado1_8",
        "text": "Questão 8 (ENEM/PPL) A torre de Hanói é um jogo que tem o objetivo de mover todos os discos de uma haste para outra, utilizando o menor número possível de movimento, respeitando-se as regras. As regras são: 1 – um disco maior não pode ser colocado sobre um disco menor; 2 – pode-se mover um único disco por vez; 3 – um disco deve estar sempre em uma das três hastes ou em movimento. Disponível em: www.uime.usp.br. Acesso em: 28 abr. 2010 (adaptado). Disponível em: www.realidadevirtual.com.br. Acesso em: 28 abr. 2010 (adaptado). Usando a torre de Hanói e baseando-se nas regras do jogo, podemos montar uma tabela entre o número de peças (X) e o número mínimo de movimentos (Y): NÚMERO DE PEÇAS NÚMERO MÍNIMO DE MOVIMENTOS 1 1 2 3 3 7 4 15 A relação entre (X) e (Y) é",
        "options": [
          "Y = 2 X - 1",
          "Y = 2 X - 1",
          "Y = 2 X",
          "Y = 2X - 1",
          "Y = 2X - 4"
        ],
        "correctIndex": 0,
        "explanation": "Analisando os valores fornecidos na tabela: • Para $X=1 \\implies Y = 2^1 - 1 = 1$ • Para $X=2 \\implies Y = 2^2 - 1 = 3$ • Para $X=3 \\implies Y = 2^3 - 1 = 7$ • Para $X=4 \\implies Y = 2^4 - 1 = 15$ A lei matemática correspondente que modela o comportamento padrão do jogo é $Y = 2^X - 1$.",
        "contentHtml": "<strong>Questão 8 (ENEM/PPL)</strong><br><br>\n                A torre de Hanói é um jogo que tem o objetivo de mover todos os discos de uma haste para outra, utilizando o menor número possível de movimento, respeitando-se as regras.<br><br>\n                <img src=\"/imagens/torre hanoi.jpeg\" alt=\"Torre de Hanói com 5 discos\" class=\"img-center\"><br>\n                As regras são:<br>\n                1 – um disco maior não pode ser colocado sobre um disco menor;<br>\n                2 – pode-se mover um único disco por vez;<br>\n                3 – um disco deve estar sempre em uma das três hastes ou em movimento.<br><br>\n                <small>Disponível em: www.uime.usp.br. Acesso em: 28 abr. 2010 (adaptado).<br>Disponível em: www.realidadevirtual.com.br. Acesso em: 28 abr. 2010 (adaptado).</small><br><br>\n                Usando a torre de Hanói e baseando-se nas regras do jogo, podemos montar uma tabela entre o número de peças (X) e o número mínimo de movimentos (Y):<br><br>\n                <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #edf2f7; text-align: center;\">\n                    <thead>\n                        <tr style=\"background-color: #f8fafc; border-bottom: 2px solid #2d3748;\">\n                            <th style=\"padding: 8px;\">NÚMERO DE PEÇAS</th>\n                            <th style=\"padding: 8px;\">NÚMERO MÍNIMO DE MOVIMENTOS</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">1</td>\n                            <td style=\"padding: 6px;\">1</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">2</td>\n                            <td style=\"padding: 6px;\">3</td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px solid #e2e8f0;\">\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">3</td>\n                            <td style=\"padding: 6px;\">7</td>\n                        </tr>\n                        <tr>\n                            <td style=\"padding: 6px; border-right: 1px solid #e2e8f0;\">4</td>\n                            <td style=\"padding: 6px;\">15</td>\n                        </tr>\n                    </tbody>\n                </table>\n                A relação entre (X) e (Y) é",
        "optionsHtml": [
          "Y = 2<sup>X</sup> - 1",
          "Y = 2<sup>X - 1</sup>",
          "Y = 2<sup>X</sup>",
          "Y = 2X - 1",
          "Y = 2X - 4"
        ],
        "explanationHtml": "Analisando os valores fornecidos na tabela:<br>• Para $X=1 \\implies Y = 2^1 - 1 = 1$<br>• Para $X=2 \\implies Y = 2^2 - 1 = 3$<br>• Para $X=3 \\implies Y = 2^3 - 1 = 7$<br>• Para $X=4 \\implies Y = 2^4 - 1 = 15$<br>A lei matemática correspondente que modela o comportamento padrão do jogo é $Y = 2^X - 1$."
      }
    ],
    "simulado2": [
      {
        "id": "unit4_simulado2_1",
        "text": "Questão 1 (ENEM) Os congestionamentos de trânsito constituem um problema que aflige, todos os dias, milhares de motoristas brasileiros. O gráfico ilustra a situação, representando, ao longo de um intervalo definido de tempo, a variação da velocidade de um veículo durante um congestionamento. Quantos minutos o veículo permaneceu imóvel ao longo do intervalo de tempo total analisado?",
        "options": [
          "4.",
          "3.",
          "2.",
          "1.",
          "0."
        ],
        "correctIndex": 2,
        "explanation": "Para que o veículo fique imóvel, sua velocidade deve ser igual a zero. No gráfico, a velocidade é representada no eixo vertical (y). O veículo estará imóvel nos intervalos onde a linha do gráfico toca o eixo horizontal (tempo), indicando V = 0. Isso ocorre no intervalo de 6 a 8 minutos, totalizando 2 minutos de imobilidade.",
        "contentHtml": "<strong>Questão 1 (ENEM)</strong><br><br>\n                Os congestionamentos de trânsito constituem um problema que aflige, todos os dias, milhares de motoristas brasileiros. O gráfico ilustra a situação, representando, ao longo de um intervalo definido de tempo, a variação da velocidade de um veículo durante um congestionamento.<br><br>\n                <img src=\"/imagens/grafico velocidade.jpeg\" alt=\"Gráfico de velocidade por tempo\" class=\"img-center\"><br>\n                Quantos minutos o veículo permaneceu imóvel ao longo do intervalo de tempo total analisado?",
        "optionsHtml": [
          "4.",
          "3.",
          "2.",
          "1.",
          "0."
        ],
        "explanationHtml": "Para que o veículo fique imóvel, sua velocidade deve ser igual a zero. No gráfico, a velocidade é representada no eixo vertical (y). O veículo estará imóvel nos intervalos onde a linha do gráfico toca o eixo horizontal (tempo), indicando V = 0. Isso ocorre no intervalo de 6 a 8 minutos, totalizando 2 minutos de imobilidade."
      },
      {
        "id": "unit4_simulado2_2",
        "text": "Questão 2 (ENEM) O gráfico abaixo, obtido a partir de dados do Ministério do Meio Ambiente, mostra o crescimento do número de espécies da fauna brasileira ameaçadas de extinção. Se mantida, pelos próximos anos, a tendência de crescimento mostrada no gráfico, o número de espécies ameaçadas de extinção em 2011 será igual a",
        "options": [
          "465.",
          "493.",
          "498.",
          "538.",
          "699."
        ],
        "correctIndex": 2,
        "explanation": "O gráfico aponta um crescimento linear em um período de 24 anos (de 1983 a 2007). O aumento de espécies foi de 461 - 239 = 222 espécies. A taxa de crescimento anual é de 222 / 24 = 9,25 espécies por ano. De 2007 para 2011 decorrem 4 anos. O incremento será de 4 &times; 9,25 = 37 espécies. Portanto, o total em 2011 será de 461 + 37 = 498 espécies.",
        "contentHtml": "<strong>Questão 2 (ENEM)</strong><br><br>\n                O gráfico abaixo, obtido a partir de dados do Ministério do Meio Ambiente, mostra o crescimento do número de espécies da fauna brasileira ameaçadas de extinção.<br><br>\n                <img src=\"/imagens/especies extincao.jpeg\" alt=\"Gráfico do crescimento de espécies ameaçadas\" class=\"img-center\"><br>\n                Se mantida, pelos próximos anos, a tendência de crescimento mostrada no gráfico, o número de espécies ameaçadas de extinção em 2011 será igual a",
        "optionsHtml": [
          "465.",
          "493.",
          "498.",
          "538.",
          "699."
        ],
        "explanationHtml": "O gráfico aponta um crescimento linear em um período de 24 anos (de 1983 a 2007). O aumento de espécies foi de 461 - 239 = 222 espécies.<br>A taxa de crescimento anual é de 222 / 24 = 9,25 espécies por ano.<br>De 2007 para 2011 decorrem 4 anos. O incremento será de 4 &times; 9,25 = 37 espécies.<br>Portanto, o total em 2011 será de 461 + 37 = 498 espécies."
      },
      {
        "id": "unit4_simulado2_3",
        "text": "Questão 3 (ENEM) O saldo de contratações no mercado formal no setor varejista da região metropolitana de São Paulo registrou alta. Comparando as contratações deste setor no mês de fevereiro com as de janeiro deste ano, houve incremento de 4 300 vagas no setor, totalizando 880 605 trabalhadores com carteira assinada. Disponível em: www.folha.uol.com.br. Acesso em: 26 abr. 2010 (adaptado). Suponha que o incremento de trabalhadores no setor varejista seja sempre o mesmo nos seis primeiros meses do ano. Considerando-se que y e x representam, respectivamente, as quantidades de trabalhadores no setor varejista e os meses, janeiro sendo o primeiro, fevereiro, o segundo, e assim por diante, a expressão algébrica que relaciona essas quantidades nesses meses é",
        "options": [
          "y = 4 300x.",
          "y = 884 905x.",
          "y = 872 005 + 4 300x.",
          "y = 876 305 + 4 300x.",
          "y = 880 605 + 4 300x."
        ],
        "correctIndex": 3,
        "explanation": "Temos que no mês x = 2 (fevereiro), o total y é de 880 605. O problema indica que houve um incremento de 4 300 vagas em relação ao mês x = 1 (janeiro). Assim, o valor inicial constante ou coeficiente linear correspondente ao 'mês zero' (b) seria: b = 880 605 - (2 * 4 300) = 880 605 - 8 600 = 876 305. Montando a lei da função afim y = ax + b, temos: y = 876 305 + 4 300x.",
        "contentHtml": "<strong>Questão 3 (ENEM)</strong><br><br>\n                O saldo de contratações no mercado formal no setor varejista da região metropolitana de São Paulo registrou alta. Comparando as contratações deste setor no mês de fevereiro com as de janeiro deste ano, houve incremento de 4 300 vagas no setor, totalizando 880 605 trabalhadores com carteira assinada.<br><br>\n                <small style=\"color: #718096;\">Disponível em: www.folha.uol.com.br. Acesso em: 26 abr. 2010 (adaptado).</small><br><br>\n                Suponha que o incremento de trabalhadores no setor varejista seja sempre o mesmo nos seis primeiros meses do ano. Considerando-se que y e x representam, respectivamente, as quantidades de trabalhadores no setor varejista e os meses, janeiro sendo o primeiro, fevereiro, o segundo, e assim por diante, a expressão algébrica que relaciona essas quantidades nesses meses é",
        "optionsHtml": [
          "y = 4 300x.",
          "y = 884 905x.",
          "y = 872 005 + 4 300x.",
          "y = 876 305 + 4 300x.",
          "y = 880 605 + 4 300x."
        ],
        "explanationHtml": "Temos que no mês x = 2 (fevereiro), o total y é de 880 605. O problema indica que houve um incremento de 4 300 vagas em relação ao mês x = 1 (janeiro). Assim, o valor inicial constante ou coeficiente linear correspondente ao 'mês zero' (b) seria:<br>b = 880 605 - (2 * 4 300) = 880 605 - 8 600 = 876 305.<br>Montando a lei da função afim y = ax + b, temos: y = 876 305 + 4 300x."
      },
      {
        "id": "unit4_simulado2_4",
        "text": "Questão 4 (ENEM) A temperatura T de um forno (em graus centígrados) é reduzida por um sistema a partir do instante de seu desligamento (t=0) e varia de acordo com a expressão T(t) = - t² 4 + 400, com t em minutos. Por motivos de segurança, a trava do forno só é liberada para abertura quando o forno atinge a temperatura de 39 °C. Qual o tempo mínimo de espera, em minutos, após desligar o forno, para que a porta possa ser aberta?",
        "options": [
          "19,0.",
          "19,8.",
          "20,0.",
          "38,0.",
          "39,0."
        ],
        "correctIndex": 3,
        "explanation": "Basta igualar a função T(t) a 39 °C: 39 = -t²/4 + 400 &rArr; t²/4 = 400 - 39 &rArr; t²/4 = 361 t² = 361 * 4 &rArr; t² = 1444 &rArr; t = &radic;1444 = 38 minutos.",
        "contentHtml": "<strong>Questão 4 (ENEM)</strong><br><br>\n                A temperatura T de um forno (em graus centígrados) é reduzida por um sistema a partir do instante de seu desligamento (t=0) e varia de acordo com a expressão T(t) = -<div class=\"frac\"><span>t²</span><span class=\"nominator\"></span><span>4</span></div> + 400, com t em minutos. Por motivos de segurança, a trava do forno só é liberada para abertura quando o forno atinge a temperatura de 39 °C.<br><br>\n                Qual o tempo mínimo de espera, em minutos, após desligar o forno, para que a porta possa ser aberta?",
        "optionsHtml": [
          "19,0.",
          "19,8.",
          "20,0.",
          "38,0.",
          "39,0."
        ],
        "explanationHtml": "Basta igualar a função T(t) a 39 °C:<br>39 = -t²/4 + 400 &rArr; t²/4 = 400 - 39 &rArr; t²/4 = 361<br>t² = 361 * 4 &rArr; t² = 1444 &rArr; t = &radic;1444 = 38 minutos."
      },
      {
        "id": "unit4_simulado2_5",
        "text": "Questão 5 (ENEM) Atualmente existem diversas locadoras de veículos, permitindo uma concorrência saudável para o mercado, fazendo com que os preços se tornem acessíveis. Nas locadoras P e Q, o valor da diária de seus carros depende da distância percorrida, conforme o gráfico. O valor pago na locadora Q é menor ou igual àquele pago na locadora P para distâncias, em quilômetros, presentes em qual(is) intervalo(s)?",
        "options": [
          "De 20 a 100.",
          "De 80 a 130.",
          "De 100 a 160.",
          "De 0 a 20 e de 100 a 160.",
          "De 40 a 80 e de 130 a 160."
        ],
        "correctIndex": 3,
        "explanation": "No gráfico, a linha da locadora Q está abaixo ou intercepta a linha da locadora P nos intervalos de 0 a 20 km e também de 100 a 160 km. Nesses trechos específicos, o valor cobrado por Q é mais vantajoso (menor ou igual ao de P).",
        "contentHtml": "<strong>Questão 5 (ENEM)</strong><br><br>\n                Atualmente existem diversas locadoras de veículos, permitindo uma concorrência saudável para o mercado, fazendo com que os preços se tornem acessíveis. Nas locadoras P e Q, o valor da diária de seus carros depende da distância percorrida, conforme o gráfico.<br><br>\n                <img src=\"/imagens/locadora.jpeg\" alt=\"Gráfico de custos das locadoras P e Q\" class=\"img-center\"><br>\n                O valor pago na locadora Q é menor ou igual àquele pago na locadora P para distâncias, em quilômetros, presentes em qual(is) intervalo(s)?",
        "optionsHtml": [
          "De 20 a 100.",
          "De 80 a 130.",
          "De 100 a 160.",
          "De 0 a 20 e de 100 a 160.",
          "De 40 a 80 e de 130 a 160."
        ],
        "explanationHtml": "No gráfico, a linha da locadora Q está abaixo ou intercepta a linha da locadora P nos intervalos de 0 a 20 km e também de 100 a 160 km. Nesses trechos específicos, o valor cobrado por Q é mais vantajoso (menor ou igual ao de P)."
      },
      {
        "id": "unit4_simulado2_6",
        "text": "Questão 6 (ENEM) Ao abrir um negócio, um microempresário descreveu suas vendas, em milhares de reais (unidade monetária brasileira), durante os dois primeiros anos. No primeiro ano, suas vendas cresceram de modo linear. Posteriormente, ele decidiu investir em propaganda, o que fez suas vendas crescerem de modo exponencial. Qual é o gráfico que melhor descreve as vendas em função do tempo?",
        "options": [
          "",
          "",
          "",
          "",
          ""
        ],
        "correctIndex": 3,
        "explanation": "O comportamento das vendas é dividido em duas partes distintas: 1. No primeiro ano ($0 \\le t \\le 1$), o crescimento é linear, representado graficamente por um segmento de linha reta inclinada . 2. No segundo ano ($1 curva com concavidade voltada para cima que cresce de forma acelerada. O gráfico D representa perfeitamente essa transição.",
        "contentHtml": "<strong>Questão 6 (ENEM)</strong><br><br>\n                Ao abrir um negócio, um microempresário descreveu suas vendas, em milhares de reais (unidade monetária brasileira), durante os dois primeiros anos. No primeiro ano, suas vendas cresceram de modo linear. Posteriormente, ele decidiu investir em propaganda, o que fez suas vendas crescerem de modo exponencial.<br><br>\n                Qual é o gráfico que melhor descreve as vendas em função do tempo?",
        "optionsHtml": [
          "<img src='/imagens/grafico_2a.jpeg' alt='Alternativa A' style='max-height: 100px; display: inline-block; vertical-align: middle;'>",
          "<img src='/imagens/grafico_2b.jpeg' alt='Alternativa B' style='max-height: 100px; display: inline-block; vertical-align: middle;'>",
          "<img src='/imagens/grafico_2c.jpeg' alt='Alternativa C' style='max-height: 100px; display: inline-block; vertical-align: middle;'>",
          "<img src='/imagens/grafico_2d.jpeg' alt='Alternativa D' style='max-height: 100px; display: inline-block; vertical-align: middle;'>",
          "<img src='/imagens/grafico_2e.jpeg' alt='Alternativa E' style='max-height: 100px; display: inline-block; vertical-align: middle;'>"
        ],
        "explanationHtml": "O comportamento das vendas é dividido em duas partes distintas:<br>1. No primeiro ano ($0 \\le t \\le 1$), o crescimento é linear, representado graficamente por um segmento de <strong>linha reta inclinada</strong>.<br>2. No segundo ano ($1 < t \\le 2$), o crescimento torna-se exponencial, representado por uma <strong>curva com concavidade voltada para cima</strong> que cresce de forma acelerada. O gráfico D representa perfeitamente essa transição."
      },
      {
        "id": "unit4_simulado2_7",
        "text": "Questão 7 (UNIFG) Um pequeno número da bactéria E.Coli , no intestino grosso de uma pessoa, pode desencadear uma séria infecção em poucas horas, pois cada uma delas se reproduz exponencialmente, dividindo-se em duas, a cada meia hora. Admitindo-se que uma infecção se inicie com 100 dessas bactérias e que nenhuma bactéria morre em um intervalo de k horas, então o tamanho da população de E. Coli t horas pós o início da infecção, 0 &le; t &le; k, pode ser determinado através da expressão matemática",
        "options": [
          "P(t) = 100 2t",
          "P(t) = 100 + 2 t",
          "P(t) = 100 + 2 2t",
          "P(t) = 100 · 2 t",
          "P(t) = 100 · 2 2t"
        ],
        "correctIndex": 4,
        "explanation": "• A população inicial $P_0$ é igual a 100. • As bactérias se duplicam (fator de crescimento = 2) a cada meia hora. Isso significa que em 1 hora, ocorrem exatamente dois ciclos de duplicação. • Portanto, em $t$ horas, ocorrerão $2t$ ciclos de divisão celular. A expressão final que modela o crescimento populacional é $P(t) = 100 \\cdot 2^{2t}$.",
        "contentHtml": "<strong>Questão 7 (UNIFG)</strong><br><br>\n                <img src=\"/imagens/bacteria.jpeg\" alt=\"Microscopia de Escherichia coli\" class=\"img-center\"><br>\n                Um pequeno número da bactéria <em>E.Coli</em>, no intestino grosso de uma pessoa, pode desencadear uma séria infecção em poucas horas, pois cada uma delas se reproduz exponencialmente, dividindo-se em duas, a cada meia hora.<br><br>\n                Admitindo-se que uma infecção se inicie com 100 dessas bactérias e que nenhuma bactéria morre em um intervalo de k horas, então o tamanho da população de <em>E. Coli</em> t horas pós o início da infecção, 0 &le; t &le; k, pode ser determinado através da expressão matemática",
        "optionsHtml": [
          "P(t) = 100<sup>2t</sup>",
          "P(t) = 100 + 2<sup>t</sup>",
          "P(t) = 100 + 2<sup>2t</sup>",
          "P(t) = 100 · 2<sup>t</sup>",
          "P(t) = 100 · 2<sup>2t</sup>"
        ],
        "explanationHtml": "• A população inicial $P_0$ é igual a 100.<br>• As bactérias se duplicam (fator de crescimento = 2) a cada meia hora. Isso significa que em 1 hora, ocorrem exatamente dois ciclos de duplicação.<br>• Portanto, em $t$ horas, ocorrerão $2t$ ciclos de divisão celular.<br>A expressão final que modela o crescimento populacional é $P(t) = 100 \\cdot 2^{2t}$."
      },
      {
        "id": "unit4_simulado2_8",
        "text": "Questão 8 (ENEM) O acréscimo de tecnologias no sistema produtivo industrial tem por objetivo reduzir custos e aumentar a produtividade. No primeiro ano de funcionamento, uma indústria fabricou 8 000 unidades de um determinado produto. No ano seguinte, investiu em tecnologia adquirindo novas máquinas e aumentou a produção em 50%. Estima-se que esse aumento percentual se repita nos próximos anos, garantindo um crescimento anual de 50%. Considere P a quantidade anual de produtos fabricados no ano t de funcionamento da indústria. Se a estimativa for alcançada, qual é a expressão que determina o número de unidades produzidas P em função de t para t &le; 1?",
        "options": [
          "P(t) = 0,5 · t -1 + 8 000",
          "P(t) = 50 · t -1 + 8 000",
          "P(t) = 4 000 · t -1 + 8 000",
          "P(t) = 8 000 · (0,5) t-1",
          "P(t) = 8 000 · (1,5) t-1"
        ],
        "correctIndex": 4,
        "explanation": "Este cenário configura-se matematicamente como uma progressão geométrica (PG) ou crescimento exponencial: • Ano $t=1$: $P(1) = 8000$ • Ano $t=2$: $P(2) = 8000 \\cdot (1 + 0,5) = 8000 \\cdot (1,5)$ • Ano $t=3$: $P(3) = 8000 \\cdot (1,5)^2$ Generalizando para o ano $t$, o fator multiplicador acumulado terá expoente $(t-1)$, resultando na função $P(t) = 8000 \\cdot (1,5)^{t-1}$.",
        "contentHtml": "<strong>Questão 8 (ENEM)</strong><br><br>\n                O acréscimo de tecnologias no sistema produtivo industrial tem por objetivo reduzir custos e aumentar a produtividade. No primeiro ano de funcionamento, uma indústria fabricou 8 000 unidades de um determinado produto. No ano seguinte, investiu em tecnologia adquirindo novas máquinas e aumentou a produção em 50%. Estima-se que esse aumento percentual se repita nos próximos anos, garantindo um crescimento anual de 50%. Considere P a quantidade anual de produtos fabricados no ano t de funcionamento da indústria.<br>\n                Se a estimativa for alcançada, qual é a expressão que determina o número de unidades produzidas P em função de t para t &le; 1?",
        "optionsHtml": [
          "P(t) = 0,5 · t<sup>-1</sup> + 8 000",
          "P(t) = 50 · t<sup>-1</sup> + 8 000",
          "P(t) = 4 000 · t<sup>-1</sup> + 8 000",
          "P(t) = 8 000 · (0,5)<sup>t-1</sup>",
          "P(t) = 8 000 · (1,5)<sup>t-1</sup>"
        ],
        "explanationHtml": "Este cenário configura-se matematicamente como uma progressão geométrica (PG) ou crescimento exponencial:<br>• Ano $t=1$: $P(1) = 8000$<br>• Ano $t=2$: $P(2) = 8000 \\cdot (1 + 0,5) = 8000 \\cdot (1,5)$<br>• Ano $t=3$: $P(3) = 8000 \\cdot (1,5)^2$<br>Generalizando para o ano $t$, o fator multiplicador acumulado terá expoente $(t-1)$, resultando na função $P(t) = 8000 \\cdot (1,5)^{t-1}$."
      }
    ]
  }
};
