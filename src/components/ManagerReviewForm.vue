<script setup>
import InlineRadio from '@comp/InlineRadio.vue'

const emit = defineEmits(['response'])

function formOnSubmit(e) {
  let formData = new FormData(e.target)
  formData = Object.fromEntries(formData)

  emit('response', formData)

  // https://stackoverflow.com/a/58239634
  e.target.reset()
}

function clear_form() {
  document.getElementById('review_form').reset()
}
</script>

<template>
  <div class="card my-4">
    <div class="card-body">
      <h5 class="card-title mb-2">Submit a Review</h5>

      <form @submit.prevent="formOnSubmit" id="review_form">
        <div class="d-flex flex-wrap">
          <div class="flex-grow-1 col-6 mb-2 me-2">
            <div class="form-floating mb-3">
              <input name="author" type="text" class="form-control" placeholder="Enter Your Name" />
              <label for="floatingInput">Enter Your Name</label>
            </div>

            <div class="form-floating">
              <textarea
                name="notes"
                rows="6"
                style="height: 100%"
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
          </div>
          <div class="row flex-grow-1 d-flex">
            <div class="col-md-6">
              <InlineRadio :label="`Responsiveness`" :internal="`timeliness_responsiveness`" />
              <InlineRadio :label="`Friendliness`" :internal="`friendliness`" />
              <InlineRadio :label="`Management`" :internal="`management_abilities`" />
            </div>
            <div class="col-md-6">
              <InlineRadio :label="`Maintenance`" :internal="`maintenance`" />
              <InlineRadio :label="`Rental Rate`" :internal="`reasonable_rate`" />
              <InlineRadio :label="`Communication`" :internal="`communication`" />
              <div class="mt-3">
                <button type="submit" class="btn btn-primary me-2">Submit</button>
                <button @click.prevent="clear_form" class="btn btn-outline-danger">Clear</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
