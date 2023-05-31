<!-- https://dev.to/madsstoumann/star-rating-using-a-single-input-i0l -->

<script setup>
const props = defineProps({
  star_count: Number
})
</script>

<template>
  <div class="d-flex flex-wrap">
    <label class="rating-label">
      <input class="rating" :style="`--value: ${star_count}`" max="5" step="0.1" type="range" />
    </label>
  </div>
</template>

<style>
.rating {
  --dir: right;
  --fill: black;
  --fillbg: rgba(100, 100, 100, 0.15);
  --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
  --stars: 5;
  --starsize: 1.5rem;
  --symbol: var(--star);
  --w: calc(var(--stars) * var(--starsize));
  --x: calc(100% * (var(--value) / var(--stars)));
  block-size: var(--starsize);
  inline-size: var(--w);
  position: relative;
  touch-action: manipulation;
  -webkit-appearance: none;
}

.rating::-moz-range-track {
  background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
  block-size: 100%;
  mask: repeat left center/var(--starsize) var(--symbol);
}

.rating::-webkit-slider-runnable-track {
  background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
  block-size: 100%;
  mask: repeat left center/var(--starsize) var(--symbol);
  -webkit-mask: repeat left center/var(--starsize) var(--symbol);
}

.rating::-moz-range-thumb {
  height: var(--starsize);
  opacity: 0;
  width: var(--starsize);
}

.rating::-webkit-slider-thumb {
  height: var(--starsize);
  opacity: 0;
  width: var(--starsize);
  -webkit-appearance: none;
}

.rating,
.rating-label {
  display: block;
  font-family: ui-sans-serif, system-ui, sans-serif;
}
</style>
