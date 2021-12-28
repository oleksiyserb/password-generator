<template>
  <main class="generator">
    <div
      class="container w-full h-full fixed top-0 left-0 flex items-center justify-center content-center overflow-auto"
    >
      <div
        style="border: 1px solid hsla(0, 0%, 88%, 0.2)"
        class="test w-96 rounded-xl bg-gray-100 px-5"
      >
        <h1 class="text-center text-2xl font-bold my-4">Password generator</h1>

        <hr />

        <div class="my-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Your password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Password"
            :value="password"
            disabled
          />
        </div>
        <hr />
        <div class="my-4">
          <label
            class="flex justify-between items-center text-gray-500 font-bold my-2"
          >
            <span class="text-sm">Password length</span>
            <input
              class="mr-2 leading-tight w-20 px-1"
              type="number"
              v-model.number="options.passwordLength"
            />
          </label>

          <label
            class="flex justify-between items-center text-gray-500 font-bold my-2"
          >
            <span class="text-sm">Include uppercase letters</span>
            <input
              class="mr-2 leading-tight"
              type="checkbox"
              v-model="options.uppercaseLetters"
            />
          </label>

          <label
            class="flex justify-between items-center text-gray-500 font-bold my-2"
          >
            <span class="text-sm">Include lowercase letters</span>
            <input
              class="mr-2 leading-tight"
              type="checkbox"
              v-model="options.lowercaseLetters"
            />
          </label>

          <label
            class="flex justify-between items-center text-gray-500 font-bold my-2"
          >
            <span class="text-sm">Include numbers</span>
            <input
              class="mr-2 leading-tight"
              type="checkbox"
              v-model="options.numbers"
            />
          </label>

          <label
            class="flex justify-between items-center text-gray-500 font-bold my-2"
          >
            <span class="text-sm">Include symbols</span>
            <input
              class="mr-2 leading-tight"
              type="checkbox"
              v-model="options.symbols"
            />
          </label>
        </div>

        <hr />

        <div class="flex items-center justify-between my-4">
          <button
            class="bg-white border-gray-500 text-gray-500 font-bold py-2 px-4 rounded flex items-center"
            type="button"
            @click="getPassword"
            :disabled="smallOrBigLength"
            :class="{
              'bg-gray-200': smallOrBigLength,
            }"
          >
            Generate &nbsp;
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="key"
              class="svg-inline--fa fa-key fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style="height: 14px"
            >
              <path
                fill="currentColor"
                d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
              ></path>
            </svg>
          </button>

          <button
            class="bg-white border-gray-500 text-gray-500 font-bold py-2 px-4 rounded flex items-center"
            type="button"
          >
            Copy &nbsp;
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="copy"
              class="svg-inline--fa fa-copy fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              style="height: 14px"
            >
              <path
                fill="currentColor"
                d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      options: {
        passwordLength: 0,
        uppercaseLetters: false,
        lowercaseLetters: false,
        numbers: false,
        symbols: false,
      },
      password: "",
      words: [],
    };
  },

  computed: {
    smallOrBigLength() {
      return (
        this.options.passwordLength <= 0 || this.options.passwordLength > 30
      );
    },
  },

  methods: {
    getPassword() {
      const uppercaseWorlds = Array.from("QWERTYUIOPASDFGHJKLZXCVBNM");
      const lowercaseWorlds = Array.from("qwertyuiopasdfghjklzxcvbnm");
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const symbols = Array.from("<?>/!@#$%&*()-=~");
      this.words = [];

      if (!Object.values(this.options).some((item) => item == true)) return;

      if (this.options.uppercaseLetters == true) {
        this.words = [...this.words, ...uppercaseWorlds];
      }
      if (this.options.lowercaseLetters == true) {
        this.words = [...this.words, ...lowercaseWorlds];
      }
      if (this.options.numbers == true) {
        this.words = [...this.words, ...numbers];
      }
      if (this.options.symbols == true) {
        this.words = [...this.words, ...symbols];
      }

      this.password = this.generatePassword(this.words);
    },

    generatePassword(words) {
      let out = "";

      for (let i = 0; i < this.options.passwordLength; i++) {
        out += words[this.getRandomInRange(0, words.length - 1)];
      }

      return out;
    },

    getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>
