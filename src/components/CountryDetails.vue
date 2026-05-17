
  <template>
  <div v-if="loading" class="text-center mt-4">
    Loading country details...
  </div>

  <div v-else-if="error" class="text-danger text-center mt-4">
    Failed to load country.
  </div>

  <div v-else-if="country" class="card p-3 mt-4">
    <h2>{{ country.name}}</h2>

    <img
      v-if="flagUrl"
      :src="flagUrl"
      :alt="country.name + ' flag'"
      class="mb-3"
      style="width: 100px;"
    />

    <ul>
      <li><strong>Capital:</strong> {{ country.capital }}</li>

      <li>
        <strong>Area:</strong>
        {{ formattedArea }} km²
      </li>

      <li><strong>Region:</strong> {{ country.region }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const country = ref(null);
const loading = ref(true);
const error = ref(false);

const flagUrl = computed(() => {
  const code = country.value?.alpha2Code;

  return typeof code === "string" && code.trim()
    ? `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`
    : "";
});

const formattedArea = computed(() => {
  const area = country.value?.area;
  return typeof area === "number" ? area.toLocaleString() : "N/A";
});

async function fetchCountry(alpha3Code) {
  if (!alpha3Code) return;

  loading.value = true;
  error.value = false;
  country.value = null;

  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${alpha3Code}?fields=name,cca2,cca3,capital,area,region`
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const [c] = await res.json();

    country.value = {
      alpha2Code: c.cca2 ?? "",
      alpha3Code: c.cca3 ?? "",
      name: c.name?.common ?? "N/A",
      capital: c.capital?.[0] ?? "N/A",
      area: c.area ?? null,
      region: c.region ?? "N/A",
    };
  } catch (err) {
    console.error("Failed to fetch country:", err);
    error.value = true;
  } finally {
    loading.value = false;
  }
}

watch(
  () => route.params.alpha3Code,
  (code) => fetchCountry(code),
  { immediate: true }
);
</script>