import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Política de Privacidade',
    description:
        'Política de Privacidade da Eixo Propriedade Intelectual: como coletamos, usamos, compartilhamos e protegemos seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).',
    alternates: {
        canonical: '/politica-privacidade',
    },
    openGraph: {
        title: 'Política de Privacidade | Eixo Intelectual',
        description:
            'Saiba como a Eixo Propriedade Intelectual trata seus dados pessoais, quais são suas finalidades, bases legais e como exercer seus direitos previstos na LGPD.',
        url: 'https://eixointelectual.com.br/politica-privacidade',
        type: 'article',
    },
    robots: {
        index: true,
        follow: true,
    },
};

// Dados institucionais utilizados na página.
// TODO: preencher o CNPJ — enquanto estiver vazio, a linha não é renderizada.
const EMPRESA = {
    razaoSocial: 'Eixo Propriedade Intelectual',
    nomeFantasia: 'Eixo Intelectual',
    cnpj: '',
    endereco:
        'Edifício Somma Tower — R. Dr. Carlos Corrêa, 141, Sala 503 — Agronômica, Florianópolis/SC, CEP 88025-250',
    email: 'contato@eixointelectual.com.br',
    telefone: '+55 48 8836-2646',
    telefoneHref: '+5548988362646',
    site: 'https://eixointelectual.com.br',
};

const ATUALIZACAO = '10 de setembro de 2026';

const SUMARIO = [
    { id: 'quem-somos', titulo: '1. Quem somos e a quem se aplica' },
    { id: 'dados-coletados', titulo: '2. Dados que coletamos' },
    { id: 'finalidades', titulo: '3. Finalidades e bases legais' },
    { id: 'cookies', titulo: '4. Cookies e tecnologias de rastreamento' },
    { id: 'meta', titulo: '5. Plataformas da Meta (Facebook, Instagram e WhatsApp)' },
    { id: 'compartilhamento', titulo: '6. Com quem compartilhamos seus dados' },
    { id: 'transferencia-internacional', titulo: '7. Transferência internacional' },
    { id: 'retencao', titulo: '8. Por quanto tempo guardamos seus dados' },
    { id: 'seguranca', titulo: '9. Segurança da informação' },
    { id: 'direitos', titulo: '10. Seus direitos como titular' },
    { id: 'exclusao-de-dados', titulo: '11. Como solicitar a exclusão dos seus dados' },
    { id: 'menores', titulo: '12. Crianças e adolescentes' },
    { id: 'links-terceiros', titulo: '13. Links e serviços de terceiros' },
    { id: 'alteracoes', titulo: '14. Alterações desta política' },
    { id: 'contato', titulo: '15. Encarregado (DPO) e contato' },
];

const BASES_LEGAIS = [
    {
        finalidade: 'Responder a solicitações de orçamento, contato e atendimento comercial',
        dados: 'Nome, e-mail, telefone, empresa, porte da empresa e mensagem',
        base: 'Procedimentos preliminares relacionados a contrato, a pedido do titular (art. 7º, V)',
    },
    {
        finalidade: 'Prestação dos serviços contratados (registro de marca, patente, software e afins)',
        dados: 'Dados cadastrais, documentos e informações necessárias ao protocolo junto ao INPI',
        base: 'Execução de contrato (art. 7º, V)',
    },
    {
        finalidade: 'Cumprimento de obrigações legais, regulatórias, fiscais e contábeis',
        dados: 'Dados cadastrais e de faturamento',
        base: 'Cumprimento de obrigação legal ou regulatória (art. 7º, II)',
    },
    {
        finalidade: 'Envio de comunicações institucionais, conteúdos e novidades',
        dados: 'Nome, e-mail e telefone',
        base: 'Consentimento (art. 7º, I) ou legítimo interesse (art. 7º, IX), conforme o caso',
    },
    {
        finalidade: 'Medição de audiência, análise de navegação e melhoria do site',
        dados: 'Dados de navegação, identificadores de cookies, endereço IP e dispositivo',
        base: 'Consentimento (art. 7º, I) para cookies não essenciais e legítimo interesse (art. 7º, IX) para os essenciais',
    },
    {
        finalidade: 'Publicidade, remarketing e mensuração de campanhas em plataformas como Meta e Google',
        dados: 'Identificadores de anúncio, eventos de navegação e dados de contato pseudonimizados (hash)',
        base: 'Consentimento (art. 7º, I)',
    },
    {
        finalidade: 'Programa de parcerias e indicações',
        dados: 'Nome, e-mail, telefone e empresa do parceiro',
        base: 'Procedimentos preliminares relacionados a contrato (art. 7º, V)',
    },
    {
        finalidade: 'Exercício regular de direitos em processo judicial, administrativo ou arbitral',
        dados: 'Registros de atendimento, contratos e comunicações',
        base: 'Exercício regular de direitos (art. 7º, VI)',
    },
];

const DIREITOS = [
    'Confirmação da existência de tratamento dos seus dados;',
    'Acesso aos dados que mantemos sobre você;',
    'Correção de dados incompletos, inexatos ou desatualizados;',
    'Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;',
    'Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa;',
    'Eliminação dos dados tratados com base no seu consentimento, ressalvadas as hipóteses de guarda obrigatória;',
    'Informação sobre as entidades públicas e privadas com as quais compartilhamos dados;',
    'Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;',
    'Revogação do consentimento, a qualquer momento, por manifestação expressa e gratuita;',
    'Oposição a tratamento realizado com fundamento em uma das hipóteses de dispensa de consentimento, em caso de descumprimento da lei.',
];

function Secao({
    id,
    titulo,
    children,
}: {
    id: string;
    titulo: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-28 border-t border-gray-200 pt-10 first:border-t-0 first:pt-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">{titulo}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
        </section>
    );
}

export default function PoliticaPrivacidade() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section
                className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
                style={{ background: 'linear-gradient(90deg, #1480c8 0%, #65bdf8 100%)' }}
            >
                <div className="absolute -left-[10%] top-[20%] w-[60vw] md:w-[35vw] h-[60vw] md:h-[35vw] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                        <ShieldCheck className="w-4 h-4" />
                        Conformidade com a LGPD — Lei nº 13.709/2018
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Política de Privacidade
                    </h1>
                    <p className="text-blue-50 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Esta política explica quais dados pessoais a {EMPRESA.nomeFantasia} coleta, por que
                        coleta, com quem compartilha e como você pode exercer seus direitos a qualquer momento.
                    </p>
                    <p className="text-blue-100/90 text-sm mt-8">
                        Última atualização: {ATUALIZACAO} · Vigência a partir da data de publicação.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                {/* Sumário */}
                <nav
                    aria-label="Sumário"
                    className="mb-14 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8"
                >
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                        Neste documento
                    </h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        {SUMARIO.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                                >
                                    {item.titulo}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="space-y-12">
                    <Secao id="quem-somos" titulo="1. Quem somos e a quem se aplica">
                        <p>
                            A {EMPRESA.razaoSocial} (&ldquo;{EMPRESA.nomeFantasia}&rdquo;, &ldquo;nós&rdquo;)
                            atua na proteção de ativos de propriedade intelectual, incluindo registro de marcas,
                            patentes e programas de computador junto ao INPI. Para essas atividades, somos a{' '}
                            <strong>controladora</strong> dos dados pessoais tratados, nos termos do art. 5º, VI,
                            da Lei Geral de Proteção de Dados Pessoais (LGPD).
                        </p>
                        <ul className="space-y-2 text-sm bg-gray-50 border border-gray-200 rounded-xl p-6 !mt-6">
                            <li className="flex gap-3">
                                <MapPin className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                                <span>{EMPRESA.endereco}</span>
                            </li>
                            {EMPRESA.cnpj && (
                                <li className="flex gap-3">
                                    <ShieldCheck className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                                    <span>CNPJ {EMPRESA.cnpj}</span>
                                </li>
                            )}
                            <li className="flex gap-3">
                                <Mail className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                                <a
                                    href={`mailto:${EMPRESA.email}`}
                                    className="text-blue-600 hover:underline break-all"
                                >
                                    {EMPRESA.email}
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                                <a href={`tel:${EMPRESA.telefoneHref}`} className="text-blue-600 hover:underline">
                                    {EMPRESA.telefone}
                                </a>
                            </li>
                        </ul>
                        <p>Esta política se aplica ao tratamento de dados realizado por meio de:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                nosso site {EMPRESA.site} e suas páginas, landing pages e formulários;
                            </li>
                            <li>
                                nossos perfis, páginas e aplicativos em plataformas da Meta (Facebook, Instagram
                                e WhatsApp), incluindo formulários de cadastro, mensagens diretas e anúncios;
                            </li>
                            <li>
                                canais de atendimento como e-mail, telefone e WhatsApp; e
                            </li>
                            <li>
                                a prestação dos nossos serviços a clientes, parceiros e interessados.
                            </li>
                        </ul>
                    </Secao>

                    <Secao id="dados-coletados" titulo="2. Dados que coletamos">
                        <h3 className="text-lg font-semibold text-gray-900 pt-2">2.1. Dados que você nos fornece</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Dados de contato e identificação:</strong> nome, e-mail, telefone/WhatsApp,
                                empresa, cargo e número de funcionários, informados em nossos formulários de
                                orçamento, parceria ou contato.
                            </li>
                            <li>
                                <strong>Dados contratuais e cadastrais:</strong> quando você se torna cliente,
                                podemos tratar CPF ou CNPJ, endereço, dados de faturamento, documentos societários
                                e demais informações exigidas pelo INPI para o protocolo do pedido.
                            </li>
                            <li>
                                <strong>Conteúdo das comunicações:</strong> mensagens, anexos, arquivos de marca
                                (logotipos, memoriais descritivos, códigos-fonte) e histórico de atendimento.
                            </li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-900 pt-4">2.2. Dados coletados automaticamente</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Dados de navegação:</strong> endereço IP, data e hora de acesso, páginas
                                visitadas, tempo de permanência, origem do acesso (referrer) e parâmetros de
                                campanha (UTM).
                            </li>
                            <li>
                                <strong>Dados de dispositivo:</strong> tipo de dispositivo, sistema operacional,
                                navegador, idioma e resolução de tela.
                            </li>
                            <li>
                                <strong>Identificadores de cookies e pixels:</strong> conforme detalhado na seção 4.
                            </li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-900 pt-4">2.3. Dados recebidos de terceiros</h3>
                        <p>
                            Podemos receber dados de plataformas de anúncios e redes sociais (como Meta e Google)
                            quando você interage com nossos anúncios ou preenche formulários hospedados nessas
                            plataformas, bem como de parceiros comerciais que indicam potenciais clientes, sempre
                            no limite da autorização concedida por você a esses terceiros.
                        </p>
                        <p className="text-sm bg-blue-50 border border-blue-100 rounded-xl p-5">
                            <strong>Não coletamos intencionalmente dados pessoais sensíveis</strong> (art. 5º, II,
                            da LGPD), como origem racial ou étnica, convicção religiosa, opinião política, dados
                            de saúde, vida sexual ou dados genéticos e biométricos. Pedimos que você não inclua
                            informações dessa natureza em mensagens enviadas a nós.
                        </p>
                    </Secao>

                    <Secao id="finalidades" titulo="3. Finalidades e bases legais">
                        <p>
                            Todo tratamento realizado por nós está vinculado a uma finalidade específica e a uma
                            base legal prevista no art. 7º da LGPD:
                        </p>
                        <div className="overflow-x-auto !mt-6 rounded-xl border border-gray-200">
                            <table className="w-full text-left text-sm min-w-[720px]">
                                <thead className="bg-gray-50 text-gray-900">
                                    <tr>
                                        <th className="px-5 py-3 font-semibold">Finalidade</th>
                                        <th className="px-5 py-3 font-semibold">Dados tratados</th>
                                        <th className="px-5 py-3 font-semibold">Base legal</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {BASES_LEGAIS.map((linha) => (
                                        <tr key={linha.finalidade} className="align-top">
                                            <td className="px-5 py-4 text-gray-900">{linha.finalidade}</td>
                                            <td className="px-5 py-4 text-gray-600">{linha.dados}</td>
                                            <td className="px-5 py-4 text-gray-600">{linha.base}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="!mt-6">
                            Não utilizamos seus dados para decisões totalmente automatizadas que produzam efeitos
                            jurídicos ou afetem significativamente seus interesses.
                        </p>
                    </Secao>

                    <Secao id="cookies" titulo="4. Cookies e tecnologias de rastreamento">
                        <p>
                            Cookies são pequenos arquivos gravados no seu dispositivo que permitem reconhecer seu
                            navegador. Utilizamos as seguintes categorias:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Essenciais:</strong> necessários ao funcionamento do site, à segurança e ao
                                envio de formulários. Não podem ser desativados.
                            </li>
                            <li>
                                <strong>Analíticos / de desempenho:</strong> ajudam a entender como o site é usado,
                                quais páginas são mais acessadas e onde há falhas. Utilizamos, entre outros, o
                                Google Tag Manager e o Google Analytics.
                            </li>
                            <li>
                                <strong>Publicidade e marketing:</strong> permitem mensurar campanhas e exibir
                                anúncios mais relevantes, inclusive remarketing. Utilizamos, entre outros, o Meta
                                Pixel e a API de Conversões da Meta, além de tags do Google Ads.
                            </li>
                        </ul>
                        <p>
                            Você pode gerenciar cookies não essenciais pelo banner de consentimento, quando
                            disponível, e a qualquer momento pelas configurações do seu navegador — inclusive
                            bloqueando ou excluindo cookies já armazenados. A desativação de cookies analíticos e
                            de publicidade não impede o uso do site, mas pode reduzir a personalização do conteúdo.
                        </p>
                        <p>
                            Para controlar a publicidade personalizada da Meta, acesse as preferências de anúncios
                            da sua conta no Facebook ou no Instagram. Para o Google, utilize as configurações de
                            anúncios da sua Conta Google.
                        </p>
                    </Secao>

                    <Secao id="meta" titulo="5. Plataformas da Meta (Facebook, Instagram e WhatsApp)">
                        <p>
                            Mantemos presença e podemos operar aplicativos e integrações nas plataformas da Meta.
                            Nesses contextos, o tratamento de dados ocorre da seguinte forma:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Formulários de cadastro (Lead Ads) e mensagens:</strong> quando você
                                preenche um formulário em um anúncio ou nos envia mensagem pelo Messenger, Direct
                                do Instagram ou WhatsApp, recebemos os dados que você informou (como nome, e-mail
                                e telefone) e o conteúdo da conversa, para responder à sua solicitação e dar
                                andamento ao atendimento comercial.
                            </li>
                            <li>
                                <strong>Login com Facebook ou Instagram (quando disponível):</strong> se você optar
                                por se autenticar em um aplicativo nosso usando sua conta Meta, recebemos apenas as
                                informações básicas do perfil que você autorizar na tela de permissões — em regra,
                                identificador da conta, nome, foto de perfil e e-mail. Nunca recebemos sua senha e
                                você pode revogar as permissões a qualquer momento nas configurações de aplicativos
                                da sua conta Meta.
                            </li>
                            <li>
                                <strong>WhatsApp Business:</strong> as conversas mantidas por esse canal são usadas
                                para atendimento, envio de propostas e acompanhamento de processos. O conteúdo das
                                mensagens é protegido pela criptografia do WhatsApp em trânsito e tratado por nós
                                conforme esta política.
                            </li>
                            <li>
                                <strong>Meta Pixel e API de Conversões:</strong> utilizamos essas tecnologias para
                                mensurar a eficácia dos anúncios e formar públicos personalizados. Dados de contato
                                eventualmente enviados à Meta para correspondência de públicos são transmitidos de
                                forma pseudonimizada (hash criptográfico).
                            </li>
                        </ul>
                        <p>
                            Utilizamos os dados obtidos por meio das plataformas da Meta exclusivamente para as
                            finalidades descritas nesta política e em conformidade com os Termos das Plataformas da
                            Meta. <strong>Não vendemos</strong> esses dados, não os transferimos para corretores de
                            dados (data brokers), redes publicitárias de terceiros ou serviços de monetização de
                            dados, e não os utilizamos para tomar decisões sobre elegibilidade a crédito, emprego,
                            seguro ou benefícios.
                        </p>
                        <p>
                            A Meta Platforms, Inc. atua como controladora independente em relação aos dados que
                            coleta em suas próprias plataformas. Recomendamos a leitura da{' '}
                            <a
                                href="https://www.facebook.com/privacy/policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Política de Privacidade da Meta
                            </a>
                            .
                        </p>
                    </Secao>

                    <Secao id="compartilhamento" titulo="6. Com quem compartilhamos seus dados">
                        <p>
                            Não vendemos seus dados pessoais. O compartilhamento ocorre apenas quando necessário
                            para as finalidades desta política, com as seguintes categorias de destinatários:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Órgãos públicos:</strong> especialmente o INPI, para o protocolo e o
                                acompanhamento dos pedidos de registro, bem como outros órgãos quando houver
                                exigência legal, regulatória ou ordem de autoridade competente.
                            </li>
                            <li>
                                <strong>Prestadores de serviço (operadores):</strong> provedores de hospedagem e
                                infraestrutura em nuvem, ferramentas de automação e integração de formulários,
                                CRM, e-mail marketing, telefonia e mensageria. Esses parceiros tratam os dados
                                apenas conforme nossas instruções e sob obrigação de confidencialidade.
                            </li>
                            <li>
                                <strong>Plataformas de publicidade e analytics:</strong> Meta e Google, nos termos
                                das seções 4 e 5.
                            </li>
                            <li>
                                <strong>Assessores e parceiros profissionais:</strong> advogados, contadores e
                                auditores, quando necessário à defesa de direitos ou ao cumprimento de obrigações.
                            </li>
                            <li>
                                <strong>Operações societárias:</strong> em caso de fusão, aquisição ou
                                reestruturação, mediante compromisso do sucessor de manter as proteções previstas
                                nesta política.
                            </li>
                        </ul>
                    </Secao>

                    <Secao id="transferencia-internacional" titulo="7. Transferência internacional">
                        <p>
                            Alguns dos nossos fornecedores de tecnologia — como serviços de nuvem, analytics e
                            plataformas de anúncios — estão sediados fora do Brasil ou processam dados em
                            servidores no exterior. Nessas hipóteses, a transferência internacional é realizada com
                            fundamento nos arts. 33 a 36 da LGPD, mediante cláusulas contratuais específicas ou
                            outras garantias de proteção equivalentes às previstas na legislação brasileira.
                        </p>
                    </Secao>

                    <Secao id="retencao" titulo="8. Por quanto tempo guardamos seus dados">
                        <p>
                            Mantemos os dados pessoais apenas pelo tempo necessário ao cumprimento das finalidades
                            para as quais foram coletados, observando os seguintes critérios:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Contatos e orçamentos não convertidos:</strong> até 24 meses após o último
                                contato, para retomada do atendimento.
                            </li>
                            <li>
                                <strong>Clientes:</strong> durante toda a vigência da relação contratual e pelos
                                prazos legais aplicáveis após o encerramento, incluindo os prazos prescricionais e
                                as obrigações fiscais e contábeis (em regra, até 5 anos, podendo se estender
                                conforme a natureza do processo junto ao INPI).
                            </li>
                            <li>
                                <strong>Dados de navegação e cookies:</strong> conforme o prazo de expiração de
                                cada cookie ou até a revogação do seu consentimento.
                            </li>
                        </ul>
                        <p>
                            Encerrados os prazos, os dados são eliminados ou anonimizados, salvo quando sua
                            conservação for autorizada pelo art. 16 da LGPD.
                        </p>
                    </Secao>

                    <Secao id="seguranca" titulo="9. Segurança da informação">
                        <p>
                            Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de
                            acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda,
                            alteração, comunicação ou difusão, incluindo criptografia em trânsito (HTTPS/TLS),
                            controle de acesso por credenciais individuais, restrição de acesso ao mínimo
                            necessário, registro de operações e acordos de confidencialidade com colaboradores e
                            fornecedores.
                        </p>
                        <p>
                            Nenhum sistema é totalmente imune a incidentes. Caso ocorra um incidente de segurança
                            com risco relevante aos seus direitos, comunicaremos você e a Autoridade Nacional de
                            Proteção de Dados (ANPD) nos termos do art. 48 da LGPD.
                        </p>
                    </Secao>

                    <Secao id="direitos" titulo="10. Seus direitos como titular">
                        <p>A LGPD garante a você, a qualquer momento e gratuitamente, os seguintes direitos:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            {DIREITOS.map((direito) => (
                                <li key={direito}>{direito}</li>
                            ))}
                        </ul>
                        <p>
                            Para exercer qualquer um desses direitos, envie um e-mail para{' '}
                            <a href={`mailto:${EMPRESA.email}`} className="text-blue-600 hover:underline">
                                {EMPRESA.email}
                            </a>{' '}
                            com o assunto &ldquo;LGPD — Direitos do Titular&rdquo;. Podemos solicitar informações
                            adicionais para confirmar sua identidade antes de atender ao pedido — uma medida de
                            segurança para evitar que terceiros acessem seus dados. Responderemos em até 15 dias
                            corridos, prazo que pode ser prorrogado mediante justificativa.
                        </p>
                    </Secao>

                    <Secao id="exclusao-de-dados" titulo="11. Como solicitar a exclusão dos seus dados">
                        <p>
                            Você pode pedir a exclusão dos seus dados pessoais a qualquer momento, inclusive dos
                            dados obtidos por meio de aplicativos e integrações com Facebook, Instagram e WhatsApp.
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>
                                Envie um e-mail para{' '}
                                <a href={`mailto:${EMPRESA.email}`} className="text-blue-600 hover:underline">
                                    {EMPRESA.email}
                                </a>{' '}
                                com o assunto <strong>&ldquo;Exclusão de dados&rdquo;</strong>.
                            </li>
                            <li>
                                Informe o nome completo e os dados de contato utilizados no cadastro (e-mail e/ou
                                telefone) e, se aplicável, o nome de usuário da conta Facebook ou Instagram
                                vinculada.
                            </li>
                            <li>
                                Confirmaremos o recebimento e, após a validação da sua identidade, concluiremos a
                                exclusão em até <strong>30 dias corridos</strong>, informando você por e-mail.
                            </li>
                        </ol>
                        <p>
                            Se você utilizou o login da Meta, também pode remover o aplicativo diretamente em{' '}
                            <em>Configurações e privacidade → Configurações → Aplicativos e sites</em> na sua conta
                            do Facebook ou do Instagram. A remoção interrompe novos compartilhamentos, mas a
                            exclusão dos dados já armazenados por nós depende da solicitação descrita acima.
                        </p>
                        <p className="text-sm bg-blue-50 border border-blue-100 rounded-xl p-5">
                            Alguns dados podem ser mantidos mesmo após o pedido de exclusão, quando houver
                            necessidade de cumprimento de obrigação legal ou regulatória, transferência a terceiro
                            com observância da LGPD, ou uso exclusivo nosso e anonimizado, nos termos do art. 16 da
                            LGPD. Nesses casos, informaremos quais dados foram preservados e por qual motivo.
                        </p>
                    </Secao>

                    <Secao id="menores" titulo="12. Crianças e adolescentes">
                        <p>
                            Nossos serviços são dirigidos a empresas e a pessoas maiores de 18 anos. Não coletamos
                            intencionalmente dados de crianças e adolescentes. Caso identifiquemos a coleta de
                            dados de menor de idade sem o consentimento específico e em destaque de ao menos um dos
                            pais ou responsável legal, os dados serão eliminados. Se você é responsável e acredita
                            que isso ocorreu, entre em contato conosco.
                        </p>
                    </Secao>

                    <Secao id="links-terceiros" titulo="13. Links e serviços de terceiros">
                        <p>
                            Nosso site e nossos materiais podem conter links para páginas de terceiros, como redes
                            sociais, o portal do INPI ou conteúdos de parceiros. Esta política não se aplica a
                            esses ambientes: ao acessá-los, você passa a se sujeitar às políticas de privacidade
                            dos respectivos responsáveis, que recomendamos ler com atenção.
                        </p>
                    </Secao>

                    <Secao id="alteracoes" titulo="14. Alterações desta política">
                        <p>
                            Esta política pode ser atualizada para refletir mudanças em nossos serviços, na
                            legislação ou nas práticas de tratamento de dados. A versão vigente é sempre a
                            publicada nesta página, identificada pela data de última atualização no topo do
                            documento. Alterações relevantes serão comunicadas pelos nossos canais habituais.
                        </p>
                    </Secao>

                    <Secao id="contato" titulo="15. Encarregado (DPO) e contato">
                        <p>
                            Para dúvidas sobre esta política, sobre o tratamento dos seus dados ou para exercer
                            seus direitos, fale com o nosso Encarregado pelo Tratamento de Dados Pessoais (DPO):
                        </p>
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 !mt-6 space-y-3 text-sm">
                            <p className="font-semibold text-gray-900 text-base">{EMPRESA.razaoSocial}</p>
                            <p className="flex gap-3">
                                <Mail className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                                <a
                                    href={`mailto:${EMPRESA.email}`}
                                    className="text-blue-600 hover:underline break-all"
                                >
                                    {EMPRESA.email}
                                </a>
                            </p>
                            <p className="flex gap-3">
                                <Phone className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                                <a href={`tel:${EMPRESA.telefoneHref}`} className="text-blue-600 hover:underline">
                                    {EMPRESA.telefone}
                                </a>
                            </p>
                            <p className="flex gap-3 text-gray-700">
                                <MapPin className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                                <span>{EMPRESA.endereco}</span>
                            </p>
                        </div>
                        <p className="!mt-6">
                            Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados
                            (ANPD), por meio do site{' '}
                            <a
                                href="https://www.gov.br/anpd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                gov.br/anpd
                            </a>
                            .
                        </p>
                    </Secao>
                </div>

                <div className="mt-16 pt-10 border-t border-gray-200">
                    <Link
                        href="/"
                        className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5"
                    >
                        Voltar para o início
                    </Link>
                </div>
            </div>
        </main>
    );
}
