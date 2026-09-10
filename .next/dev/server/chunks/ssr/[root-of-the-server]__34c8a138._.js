module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/politica-privacidade/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PoliticaPrivacidade,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-rsc] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-rsc] (ecmascript) <export default as ShieldCheck>");
;
;
;
const metadata = {
    title: 'Política de Privacidade',
    description: 'Política de Privacidade da Eixo Propriedade Intelectual: como coletamos, usamos, compartilhamos e protegemos seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).',
    alternates: {
        canonical: '/politica-privacidade'
    },
    openGraph: {
        title: 'Política de Privacidade | Eixo Intelectual',
        description: 'Saiba como a Eixo Propriedade Intelectual trata seus dados pessoais, quais são suas finalidades, bases legais e como exercer seus direitos previstos na LGPD.',
        url: 'https://eixointelectual.com.br/politica-privacidade',
        type: 'article'
    },
    robots: {
        index: true,
        follow: true
    }
};
// Dados institucionais utilizados na página.
// TODO: preencher o CNPJ — enquanto estiver vazio, a linha não é renderizada.
const EMPRESA = {
    razaoSocial: 'Eixo Propriedade Intelectual',
    nomeFantasia: 'Eixo Intelectual',
    cnpj: '',
    endereco: 'Edifício Somma Tower — R. Dr. Carlos Corrêa, 141, Sala 503 — Agronômica, Florianópolis/SC, CEP 88025-250',
    email: 'contato@eixointelectual.com.br',
    telefone: '+55 48 8836-2646',
    telefoneHref: '+5548988362646',
    site: 'https://eixointelectual.com.br'
};
const ATUALIZACAO = '10 de setembro de 2026';
const SUMARIO = [
    {
        id: 'quem-somos',
        titulo: '1. Quem somos e a quem se aplica'
    },
    {
        id: 'dados-coletados',
        titulo: '2. Dados que coletamos'
    },
    {
        id: 'finalidades',
        titulo: '3. Finalidades e bases legais'
    },
    {
        id: 'cookies',
        titulo: '4. Cookies e tecnologias de rastreamento'
    },
    {
        id: 'meta',
        titulo: '5. Plataformas da Meta (Facebook, Instagram e WhatsApp)'
    },
    {
        id: 'compartilhamento',
        titulo: '6. Com quem compartilhamos seus dados'
    },
    {
        id: 'transferencia-internacional',
        titulo: '7. Transferência internacional'
    },
    {
        id: 'retencao',
        titulo: '8. Por quanto tempo guardamos seus dados'
    },
    {
        id: 'seguranca',
        titulo: '9. Segurança da informação'
    },
    {
        id: 'direitos',
        titulo: '10. Seus direitos como titular'
    },
    {
        id: 'exclusao-de-dados',
        titulo: '11. Como solicitar a exclusão dos seus dados'
    },
    {
        id: 'menores',
        titulo: '12. Crianças e adolescentes'
    },
    {
        id: 'links-terceiros',
        titulo: '13. Links e serviços de terceiros'
    },
    {
        id: 'alteracoes',
        titulo: '14. Alterações desta política'
    },
    {
        id: 'contato',
        titulo: '15. Encarregado (DPO) e contato'
    }
];
const BASES_LEGAIS = [
    {
        finalidade: 'Responder a solicitações de orçamento, contato e atendimento comercial',
        dados: 'Nome, e-mail, telefone, empresa, porte da empresa e mensagem',
        base: 'Procedimentos preliminares relacionados a contrato, a pedido do titular (art. 7º, V)'
    },
    {
        finalidade: 'Prestação dos serviços contratados (registro de marca, patente, software e afins)',
        dados: 'Dados cadastrais, documentos e informações necessárias ao protocolo junto ao INPI',
        base: 'Execução de contrato (art. 7º, V)'
    },
    {
        finalidade: 'Cumprimento de obrigações legais, regulatórias, fiscais e contábeis',
        dados: 'Dados cadastrais e de faturamento',
        base: 'Cumprimento de obrigação legal ou regulatória (art. 7º, II)'
    },
    {
        finalidade: 'Envio de comunicações institucionais, conteúdos e novidades',
        dados: 'Nome, e-mail e telefone',
        base: 'Consentimento (art. 7º, I) ou legítimo interesse (art. 7º, IX), conforme o caso'
    },
    {
        finalidade: 'Medição de audiência, análise de navegação e melhoria do site',
        dados: 'Dados de navegação, identificadores de cookies, endereço IP e dispositivo',
        base: 'Consentimento (art. 7º, I) para cookies não essenciais e legítimo interesse (art. 7º, IX) para os essenciais'
    },
    {
        finalidade: 'Publicidade, remarketing e mensuração de campanhas em plataformas como Meta e Google',
        dados: 'Identificadores de anúncio, eventos de navegação e dados de contato pseudonimizados (hash)',
        base: 'Consentimento (art. 7º, I)'
    },
    {
        finalidade: 'Programa de parcerias e indicações',
        dados: 'Nome, e-mail, telefone e empresa do parceiro',
        base: 'Procedimentos preliminares relacionados a contrato (art. 7º, V)'
    },
    {
        finalidade: 'Exercício regular de direitos em processo judicial, administrativo ou arbitral',
        dados: 'Registros de atendimento, contratos e comunicações',
        base: 'Exercício regular de direitos (art. 7º, VI)'
    }
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
    'Oposição a tratamento realizado com fundamento em uma das hipóteses de dispensa de consentimento, em caso de descumprimento da lei.'
];
function Secao({ id, titulo, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "scroll-mt-28 border-t border-gray-200 pt-10 first:border-t-0 first:pt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-3xl font-bold text-gray-900 mb-5",
                children: titulo
            }, void 0, false, {
                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 text-gray-700 leading-relaxed",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/politica-privacidade/page.tsx",
        lineNumber: 125,
        columnNumber: 9
    }, this);
}
function PoliticaPrivacidade() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden",
                style: {
                    background: 'linear-gradient(90deg, #1480c8 0%, #65bdf8 100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-[10%] top-[20%] w-[60vw] md:w-[35vw] h-[60vw] md:h-[35vw] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, this),
                                    "Conformidade com a LGPD — Lei nº 13.709/2018"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold text-white leading-tight mb-6",
                                children: "Política de Privacidade"
                            }, void 0, false, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-blue-50 text-lg md:text-xl max-w-2xl leading-relaxed",
                                children: [
                                    "Esta política explica quais dados pessoais a ",
                                    EMPRESA.nomeFantasia,
                                    " coleta, por que coleta, com quem compartilha e como você pode exercer seus direitos a qualquer momento."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-blue-100/90 text-sm mt-8",
                                children: [
                                    "Última atualização: ",
                                    ATUALIZACAO,
                                    " · Vigência a partir da data de publicação."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Sumário",
                        className: "mb-14 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4",
                                children: "Neste documento"
                            }, void 0, false, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2",
                                children: SUMARIO.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${item.id}`,
                                            className: "text-gray-700 hover:text-blue-600 transition-colors text-sm",
                                            children: item.titulo
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 33
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "quem-somos",
                                titulo: "1. Quem somos e a quem se aplica",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "A ",
                                            EMPRESA.razaoSocial,
                                            " (“",
                                            EMPRESA.nomeFantasia,
                                            "”, “nós”) atua na proteção de ativos de propriedade intelectual, incluindo registro de marcas, patentes e programas de computador junto ao INPI. Para essas atividades, somos a",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "controladora"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 29
                                            }, this),
                                            " dos dados pessoais tratados, nos termos do art. 5º, VI, da Lei Geral de Proteção de Dados Pessoais (LGPD)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm bg-gray-50 border border-gray-200 rounded-xl p-6 !mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-4 h-4 mt-1 text-blue-600 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: EMPRESA.endereco
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 29
                                            }, this),
                                            EMPRESA.cnpj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                        className: "w-4 h-4 mt-1 text-blue-600 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "CNPJ ",
                                                            EMPRESA.cnpj
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "w-4 h-4 mt-1 text-blue-600 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${EMPRESA.email}`,
                                                        className: "text-blue-600 hover:underline break-all",
                                                        children: EMPRESA.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-4 h-4 mt-1 text-blue-600 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${EMPRESA.telefoneHref}`,
                                                        className: "text-blue-600 hover:underline",
                                                        children: EMPRESA.telefone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Esta política se aplica ao tratamento de dados realizado por meio de:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-6 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "nosso site ",
                                                    EMPRESA.site,
                                                    " e suas páginas, landing pages e formulários;"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "nossos perfis, páginas e aplicativos em plataformas da Meta (Facebook, Instagram e WhatsApp), incluindo formulários de cadastro, mensagens diretas e anúncios;"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "canais de atendimento como e-mail, telefone e WhatsApp; e"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "a prestação dos nossos serviços a clientes, parceiros e interessados."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "dados-coletados",
                                titulo: "2. Dados que coletamos",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900 pt-2",
                                        children: "2.1. Dados que você nos fornece"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-6 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Dados de contato e identificação:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 33
                                                    }, this),
                                                    " nome, e-mail, telefone/WhatsApp, empresa, cargo e número de funcionários, informados em nossos formulários de orçamento, parceria ou contato."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Dados contratuais e cadastrais:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 33
                                                    }, this),
                                                    " quando você se torna cliente, podemos tratar CPF ou CNPJ, endereço, dados de faturamento, documentos societários e demais informações exigidas pelo INPI para o protocolo do pedido."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Conteúdo das comunicações:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 33
                                                    }, this),
                                                    " mensagens, anexos, arquivos de marca (logotipos, memoriais descritivos, códigos-fonte) e histórico de atendimento."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900 pt-4",
                                        children: "2.2. Dados coletados automaticamente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-6 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Dados de navegação:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 33
                                                    }, this),
                                                    " endereço IP, data e hora de acesso, páginas visitadas, tempo de permanência, origem do acesso (referrer) e parâmetros de campanha (UTM)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Dados de dispositivo:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 33
                                                    }, this),
                                                    " tipo de dispositivo, sistema operacional, navegador, idioma e resolução de tela."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Identificadores de cookies e pixels:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 33
                                                    }, this),
                                                    " conforme detalhado na seção 4."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900 pt-4",
                                        children: "2.3. Dados recebidos de terceiros"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Podemos receber dados de plataformas de anúncios e redes sociais (como Meta e Google) quando você interage com nossos anúncios ou preenche formulários hospedados nessas plataformas, bem como de parceiros comerciais que indicam potenciais clientes, sempre no limite da autorização concedida por você a esses terceiros."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm bg-blue-50 border border-blue-100 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Não coletamos intencionalmente dados pessoais sensíveis"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 29
                                            }, this),
                                            " (art. 5º, II, da LGPD), como origem racial ou étnica, convicção religiosa, opinião política, dados de saúde, vida sexual ou dados genéticos e biométricos. Pedimos que você não inclua informações dessa natureza em mensagens enviadas a nós."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 236,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "finalidades",
                                titulo: "3. Finalidades e bases legais",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Todo tratamento realizado por nós está vinculado a uma finalidade específica e a uma base legal prevista no art. 7º da LGPD:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto !mt-6 rounded-xl border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-sm min-w-[720px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-gray-50 text-gray-900",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-5 py-3 font-semibold",
                                                                children: "Finalidade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-5 py-3 font-semibold",
                                                                children: "Dados tratados"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-5 py-3 font-semibold",
                                                                children: "Base legal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-gray-200",
                                                    children: BASES_LEGAIS.map((linha)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "align-top",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-5 py-4 text-gray-900",
                                                                    children: linha.finalidade
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-5 py-4 text-gray-600",
                                                                    children: linha.dados
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-5 py-4 text-gray-600",
                                                                    children: linha.base
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, linha.finalidade, true, {
                                                            fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 41
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "!mt-6",
                                        children: "Não utilizamos seus dados para decisões totalmente automatizadas que produzam efeitos jurídicos ou afetem significativamente seus interesses."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "cookies",
                                titulo: "4. Cookies e tecnologias de rastreamento",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Cookies são pequenos arquivos gravados no seu dispositivo que permitem reconhecer seu navegador. Utilizamos as seguintes categorias:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-6 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Essenciais:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 33
                                                    }, this),
                                                    " necessários ao funcionamento do site, à segurança e ao envio de formulários. Não podem ser desativados."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Analíticos / de desempenho:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 33
                                                    }, this),
                                                    " ajudam a entender como o site é usado, quais páginas são mais acessadas e onde há falhas. Utilizamos, entre outros, o Google Tag Manager e o Google Analytics."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Publicidade e marketing:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 33
                                                    }, this),
                                                    " permitem mensurar campanhas e exibir anúncios mais relevantes, inclusive remarketing. Utilizamos, entre outros, o Meta Pixel e a API de Conversões da Meta, além de tags do Google Ads."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Você pode gerenciar cookies não essenciais pelo banner de consentimento, quando disponível, e a qualquer momento pelas configurações do seu navegador — inclusive bloqueando ou excluindo cookies já armazenados. A desativação de cookies analíticos e de publicidade não impede o uso do site, mas pode reduzir a personalização do conteúdo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Para controlar a publicidade personalizada da Meta, acesse as preferências de anúncios da sua conta no Facebook ou no Instagram. Para o Google, utilize as configurações de anúncios da sua Conta Google."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 317,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "meta",
                                titulo: "5. Plataformas da Meta (Facebook, Instagram e WhatsApp)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Mantemos presença e podemos operar aplicativos e integrações nas plataformas da Meta. Nesses contextos, o tratamento de dados ocorre da seguinte forma:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-6 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Formulários de cadastro (Lead Ads) e mensagens:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 33
                                                    }, this),
                                                    " quando você preenche um formulário em um anúncio ou nos envia mensagem pelo Messenger, Direct do Instagram ou WhatsApp, recebemos os dados que você informou (como nome, e-mail e telefone) e o conteúdo da conversa, para responder à sua solicitação e dar andamento ao atendimento comercial."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Login com Facebook ou Instagram (quando disponível):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 33
                                                    }, this),
                                                    " se você optar por se autenticar em um aplicativo nosso usando sua conta Meta, recebemos apenas as informações básicas do perfil que você autorizar na tela de permissões — em regra, identificador da conta, nome, foto de perfil e e-mail. Nunca recebemos sua senha e você pode revogar as permissões a qualquer momento nas configurações de aplicativos da sua conta Meta."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "WhatsApp Business:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 33
                                                    }, this),
                                                    " as conversas mantidas por esse canal são usadas para atendimento, envio de propostas e acompanhamento de processos. O conteúdo das mensagens é protegido pela criptografia do WhatsApp em trânsito e tratado por nós conforme esta política."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Meta Pixel e API de Conversões:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 33
                                                    }, this),
                                                    " utilizamos essas tecnologias para mensurar a eficácia dos anúncios e formar públicos personalizados. Dados de contato eventualmente enviados à Meta para correspondência de públicos são transmitidos de forma pseudonimizada (hash criptográfico)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Utilizamos os dados obtidos por meio das plataformas da Meta exclusivamente para as finalidades descritas nesta política e em conformidade com os Termos das Plataformas da Meta. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Não vendemos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 35
                                            }, this),
                                            " esses dados, não os transferimos para corretores de dados (data brokers), redes publicitárias de terceiros ou serviços de monetização de dados, e não os utilizamos para tomar decisões sobre elegibilidade a crédito, emprego, seguro ou benefícios."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "A Meta Platforms, Inc. atua como controladora independente em relação aos dados que coleta em suas próprias plataformas. Recomendamos a leitura da",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.facebook.com/privacy/policy",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-blue-600 hover:underline",
                                                children: "Política de Privacidade da Meta"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 29
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 393,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 351,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "compartilhamento",
                                titulo: "6. Com quem compartilhamos seus dados",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Não vendemos seus dados pessoais. O compartilhamento ocorre apenas quando necessário para as finalidades desta política, com as seguintes categorias de destinatários:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-6 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Órgãos públicos:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 33
                                                    }, this),
                                                    " especialmente o INPI, para o protocolo e o acompanhamento dos pedidos de registro, bem como outros órgãos quando houver exigência legal, regulatória ou ordem de autoridade competente."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Prestadores de serviço (operadores):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 33
                                                    }, this),
                                                    " provedores de hospedagem e infraestrutura em nuvem, ferramentas de automação e integração de formulários, CRM, e-mail marketing, telefonia e mensageria. Esses parceiros tratam os dados apenas conforme nossas instruções e sob obrigação de confidencialidade."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 419,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Plataformas de publicidade e analytics:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 33
                                                    }, this),
                                                    " Meta e Google, nos termos das seções 4 e 5."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Assessores e parceiros profissionais:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 33
                                                    }, this),
                                                    " advogados, contadores e auditores, quando necessário à defesa de direitos ou ao cumprimento de obrigações."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Operações societárias:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 33
                                                    }, this),
                                                    " em caso de fusão, aquisição ou reestruturação, mediante compromisso do sucessor de manter as proteções previstas nesta política."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 408,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "transferencia-internacional",
                                titulo: "7. Transferência internacional",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Alguns dos nossos fornecedores de tecnologia — como serviços de nuvem, analytics e plataformas de anúncios — estão sediados fora do Brasil ou processam dados em servidores no exterior. Nessas hipóteses, a transferência internacional é realizada com fundamento nos arts. 33 a 36 da LGPD, mediante cláusulas contratuais específicas ou outras garantias de proteção equivalentes às previstas na legislação brasileira."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                    lineNumber: 442,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 441,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "retencao",
                                titulo: "8. Por quanto tempo guardamos seus dados",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Mantemos os dados pessoais apenas pelo tempo necessário ao cumprimento das finalidades para as quais foram coletados, observando os seguintes critérios:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 452,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-6 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Contatos e orçamentos não convertidos:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 33
                                                    }, this),
                                                    " até 24 meses após o último contato, para retomada do atendimento."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Clientes:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 33
                                                    }, this),
                                                    " durante toda a vigência da relação contratual e pelos prazos legais aplicáveis após o encerramento, incluindo os prazos prescricionais e as obrigações fiscais e contábeis (em regra, até 5 anos, podendo se estender conforme a natureza do processo junto ao INPI)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 461,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Dados de navegação e cookies:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 33
                                                    }, this),
                                                    " conforme o prazo de expiração de cada cookie ou até a revogação do seu consentimento."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Encerrados os prazos, os dados são eliminados ou anonimizados, salvo quando sua conservação for autorizada pelo art. 16 da LGPD."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 451,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "seguranca",
                                titulo: "9. Segurança da informação",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão, incluindo criptografia em trânsito (HTTPS/TLS), controle de acesso por credenciais individuais, restrição de acesso ao mínimo necessário, registro de operações e acordos de confidencialidade com colaboradores e fornecedores."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Nenhum sistema é totalmente imune a incidentes. Caso ocorra um incidente de segurança com risco relevante aos seus direitos, comunicaremos você e a Autoridade Nacional de Proteção de Dados (ANPD) nos termos do art. 48 da LGPD."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 487,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 478,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "direitos",
                                titulo: "10. Seus direitos como titular",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "A LGPD garante a você, a qualquer momento e gratuitamente, os seguintes direitos:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 495,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-6 space-y-2",
                                        children: DIREITOS.map((direito)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: direito
                                            }, direito, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 496,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Para exercer qualquer um desses direitos, envie um e-mail para",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${EMPRESA.email}`,
                                                className: "text-blue-600 hover:underline",
                                                children: EMPRESA.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 29
                                            }, this),
                                            ' ',
                                            "com o assunto “LGPD — Direitos do Titular”. Podemos solicitar informações adicionais para confirmar sua identidade antes de atender ao pedido — uma medida de segurança para evitar que terceiros acessem seus dados. Responderemos em até 15 dias corridos, prazo que pode ser prorrogado mediante justificativa."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 494,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "exclusao-de-dados",
                                titulo: "11. Como solicitar a exclusão dos seus dados",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Você pode pedir a exclusão dos seus dados pessoais a qualquer momento, inclusive dos dados obtidos por meio de aplicativos e integrações com Facebook, Instagram e WhatsApp."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 514,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "list-decimal pl-6 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Envie um e-mail para",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${EMPRESA.email}`,
                                                        className: "text-blue-600 hover:underline",
                                                        children: EMPRESA.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 33
                                                    }, this),
                                                    ' ',
                                                    "com o assunto ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "“Exclusão de dados”"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 47
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Informe o nome completo e os dados de contato utilizados no cadastro (e-mail e/ou telefone) e, se aplicável, o nome de usuário da conta Facebook ou Instagram vinculada."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Confirmaremos o recebimento e, após a validação da sua identidade, concluiremos a exclusão em até ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "30 dias corridos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 49
                                                    }, this),
                                                    ", informando você por e-mail."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Se você utilizou o login da Meta, também pode remover o aplicativo diretamente em",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "Configurações e privacidade → Configurações → Aplicativos e sites"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 538,
                                                columnNumber: 29
                                            }, this),
                                            " na sua conta do Facebook ou do Instagram. A remoção interrompe novos compartilhamentos, mas a exclusão dos dados já armazenados por nós depende da solicitação descrita acima."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 536,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm bg-blue-50 border border-blue-100 rounded-xl p-5",
                                        children: "Alguns dados podem ser mantidos mesmo após o pedido de exclusão, quando houver necessidade de cumprimento de obrigação legal ou regulatória, transferência a terceiro com observância da LGPD, ou uso exclusivo nosso e anonimizado, nos termos do art. 16 da LGPD. Nesses casos, informaremos quais dados foram preservados e por qual motivo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 513,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "menores",
                                titulo: "12. Crianças e adolescentes",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Nossos serviços são dirigidos a empresas e a pessoas maiores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes. Caso identifiquemos a coleta de dados de menor de idade sem o consentimento específico e em destaque de ao menos um dos pais ou responsável legal, os dados serão eliminados. Se você é responsável e acredita que isso ocorreu, entre em contato conosco."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 550,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "links-terceiros",
                                titulo: "13. Links e serviços de terceiros",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Nosso site e nossos materiais podem conter links para páginas de terceiros, como redes sociais, o portal do INPI ou conteúdos de parceiros. Esta política não se aplica a esses ambientes: ao acessá-los, você passa a se sujeitar às políticas de privacidade dos respectivos responsáveis, que recomendamos ler com atenção."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 560,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "alteracoes",
                                titulo: "14. Alterações desta política",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Esta política pode ser atualizada para refletir mudanças em nossos serviços, na legislação ou nas práticas de tratamento de dados. A versão vigente é sempre a publicada nesta página, identificada pela data de última atualização no topo do documento. Alterações relevantes serão comunicadas pelos nossos canais habituais."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 569,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Secao, {
                                id: "contato",
                                titulo: "15. Encarregado (DPO) e contato",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Para dúvidas sobre esta política, sobre o tratamento dos seus dados ou para exercer seus direitos, fale com o nosso Encarregado pelo Tratamento de Dados Pessoais (DPO):"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 579,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 !mt-6 space-y-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-gray-900 text-base",
                                                children: EMPRESA.razaoSocial
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 584,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${EMPRESA.email}`,
                                                        className: "text-blue-600 hover:underline break-all",
                                                        children: EMPRESA.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 585,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${EMPRESA.telefoneHref}`,
                                                        className: "text-blue-600 hover:underline",
                                                        children: EMPRESA.telefone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 596,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 594,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex gap-3 text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: EMPRESA.endereco
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 600,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 583,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "!mt-6",
                                        children: [
                                            "Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD), por meio do site",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.gov.br/anpd",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-blue-600 hover:underline",
                                                children: "gov.br/anpd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 29
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                                lineNumber: 578,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 pt-10 border-t border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5",
                            children: "Voltar para o início"
                        }, void 0, false, {
                            fileName: "[project]/src/app/politica-privacidade/page.tsx",
                            lineNumber: 622,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/politica-privacidade/page.tsx",
                        lineNumber: 621,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/politica-privacidade/page.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/politica-privacidade/page.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/politica-privacidade/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/politica-privacidade/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__34c8a138._.js.map