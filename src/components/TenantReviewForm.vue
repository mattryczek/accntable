<script setup>
import InlineRadio from '@comp/InlineRadio.vue'
import InlineInput from '@comp/InlineInput.vue'

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
      <form @submit.prevent="formOnSubmit" id="review_form">
        <h5 class="card-title mb-2">Submit a Review</h5>

        <div class="d-flex flex-wrap">
          <div class="flex-grow-1 col-6 mb-2 me-2">
            <div class="form-floating mb-3">
              <input type="text" name="author" class="form-control" placeholder="Enter Your Name" />
              <label for="floatingInput">Enter Your Name</label>
            </div>

            <div class="form-floating">
              <textarea
                rows="6"
                name="notes"
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
              <InlineRadio :label="`Cleanliness`" :internal="`cleanliness`" />
            </div>
            <div class="col-md-6">
              <InlineRadio :label="`Communication`" :internal="`communication`" />
              <InlineRadio
                :label="`Property Returned Condition`"
                :internal="`property_condition`"
              />
              <InlineInput :label="`Number of Reports`" :internal="`reports`" />
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
