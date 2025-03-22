<template>
    <div class="min-h-screen bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center p-4">

        <div class="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div class="flex space-x-4 p-4 bg-gray-200 rounded-t-xl">
                <button @click="activeTab = 'convert'"
                    :class="{ 'font-bold text-primary-600 border-b-2 border-primary-600': activeTab === 'convert' }"
                    class="py-2 px-4 text-gray-700">
                    🔢 Convertidor
                </button>
                <button @click="activeTab = 'docs'; loadDocumentation()"
                    :class="{ 'font-bold text-primary-600 border-b-2 border-primary-600': activeTab === 'docs' }"
                    class="py-2 px-4 text-gray-700">
                    📖 Documentación
                </button>
            </div>

            <!-- Header -->
            <div v-if="activeTab === 'convert'">
                <div class="bg-gradient-to-r from-primary-600 to-teal-400 p-6">
                    <h1 class="text-4xl font-bold text-white text-center">
                        Número a Letras
                    </h1>
                    <p class="text-white text-center opacity-90 mt-2">
                        Convierte cualquier número a su representación textual
                    </p>
                </div>

                <!-- Content -->
                <div class="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    <!-- Input Section -->
                    <div class="space-y-6">
                        <div class="space-y-2">
                            <label for="number-input" class="block text-sm font-medium text-gray-700">
                                Ingresa un número
                            </label>
                            <UInput size="xl" v-model="number" type="number" placeholder="Enter a number" />
                        </div>

                        <div class="space-y-2">
                            <label for="currency-select" class="block text-sm font-medium text-gray-700">
                                Selecciona moneda
                            </label>
                            <USelect size="xl" v-model="currency" :options="currencyOptions"
                                placeholder="Selecciona moneda" />
                        </div>

                        <button @click="convertNumber"
                            class="w-full bg-gradient-to-r from-primary-600 to-teal-400 hover:from-primary-700 hover:to-teal-500 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50">
                            Convertir
                        </button>
                    </div>

                    <!-- Output Section -->
                    <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <span class="bg-primary-500 text-white p-1 rounded mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            Resultado
                        </h2>

                        <div class="space-y-4">
                            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                <p class="text-sm text-gray-500">Texto simple:</p>
                                <p class="text-lg font-medium text-gray-800 capitalize">{{ numberInWords }}</p>
                            </div>

                            <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                <p class="text-sm text-gray-500">Formato monetario:</p>
                                <p class="text-lg font-medium text-gray-800 capitalize">{{ numberInWordsLetters }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="activeTab === 'docs'">
                <section class="p-4">
                    <h1 class="text-2xl font-bold my-2">📖 Documentación</h1>
                    <div v-html="renderedMarkdown" class="prose max-w-none"></div>
                </section>
            </div>

            <!-- Footer -->
            <div class="bg-gray-50 border-t border-gray-200 p-4 text-center text-gray-500 text-sm">
                <p> Convertidor de Números a Letras v1.2.1 by <NuxtLink to="https://github.com/Jamesllm"
                        class="text-primary underline">Jamesllm</NuxtLink>
                </p>
                <p class="mt-1">
                    <NuxtLink target="_blank" to="https://www.npmjs.com/package/number-to-letters-js">
                        <Icon name=logos:npm />
                    </NuxtLink>
                </p>
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { numberToLetters, convertNumberLetters } from 'number-to-letters-js';
import MarkdownIt from "markdown-it";


// Variables reactivas
const number = ref<number>(0);
const currency = ref<string>('PEN');
const activeTab = ref<"convert" | "docs">("convert");
const markdownContent = ref<string>("");

// Instancia de markdown-it con soporte para tablas
const md = new MarkdownIt()

// Computed property para renderizar el markdown
const renderedMarkdown = computed(() => md.render(markdownContent.value));

const currencyOptions = ref([
    { label: 'USD', value: 'USD', key: 'usd' },
    { label: 'PEN', value: 'PEN', key: 'pen' },
    { label: 'EUR', value: 'EUR', key: 'eur' },
    { label: 'GBP', value: 'GBP', key: 'gbp' },
    { label: 'JPY', value: 'JPY', key: 'jpy' },
    { label: 'BRL', value: 'BRL', key: 'brl' },
    { label: 'CAD', value: 'CAD', key: 'cad' },
    { label: 'AUD', value: 'AUD', key: 'aud' },
    { label: 'MXN', value: 'MXN', key: 'mxm' },
    { label: 'CHF', value: 'CHF', key: 'chf' },
    { label: 'CNY', value: 'CNY', key: 'cny' },
    { label: 'INR', value: 'INR', key: 'inr' },
]);

const numberInWords = ref<string>('');
const numberInWordsLetters = ref<string>('');

function convertNumber() {
    numberInWords.value = numberToLetters(number.value);
    numberInWordsLetters.value = convertNumberLetters(number.value, currency.value);
}

// Función para cargar la documentación desde un archivo
async function loadDocumentation() {
    if (!markdownContent.value) {
        const response = await fetch("/doc.md"); // Asegúrate de que doc.md esté en /public
        markdownContent.value = await response.text();
    }
}

useSeoMeta({
    title: "Número a Letras - Convierte Números a Texto con Formato Monetario",
    description: "Convierte cualquier número en su representación textual con soporte para múltiples monedas (PEN, USD, EUR). Herramienta rápida y precisa.",
    ogTitle: "Número a Letras - Convierte Números a Texto con Formato Monetario",
    ogDescription: "Convierte números en palabras con soporte para monedas como PEN, USD y EUR. Ideal para documentos financieros y facturación.",
    ogImage: "https://ronal-llapapasca.vercel.app/number-to-letters-js.png",
    ogType: "website",
    ogUrl: "https://ronal-llapapasca.vercel.app/", // Reemplaza con tu URL
    twitterCard: "summary_large_image",
    twitterTitle: "Número a Letras - Convierte Números a Texto",
    twitterDescription: "Convierte cualquier número a texto fácilmente con formato monetario incluido.",
    twitterImage: "https://ronal-llapapasca.vercel.app/number-to-letters-js.png"
});

</script>

<style>
.prose table {
    width: 100%;
    border-collapse: collapse;
}

.prose th,
.prose td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.prose th {
    background-color: #f4f4f4;
    font-weight: bold;
}
</style>