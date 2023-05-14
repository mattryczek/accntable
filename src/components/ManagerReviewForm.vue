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

</script>

<template>
    <div class="card my-4">
        <div class="card-body">
            <h5 class="card-title mb-2">Submit a Review</h5>

            <form  @submit.prevent="formOnSubmit">
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input name="author" type="text" class="form-control" placeholder="Enter Your Name">
                            <label for="floatingInput">Enter Your Name</label>
                        </div>

                        <div class="form-floating">
                            <textarea name="notes" rows="6" style="height:100%;" class="form-control" placeholder="Leave a comment here"
                                id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                    </div>
                    <div class="row col">
                        <div class="col">
                            <InlineRadio :label="`Responsiveness`" :internal="`timeliness_responsiveness`" />
                            <InlineRadio :label="`Friendliness`" :internal="`friendliness`" />
                            <InlineRadio :label="`Management`" :internal="`management_abilities`" />
                            <button class="btn btn-primary mt-4">Submit</button>
                        </div>
                        <div class="col">
                            <InlineRadio :label="`Maintenance`" :internal="`maintenance`" />
                            <InlineRadio :label="`Rental Rate`" :internal="`reasonable_rate`" />
                            <InlineRadio :label="`Communication`" :internal="`communication`" />
                        </div>

                    </div>
                </div>
            </form>

        </div>
    </div>
</template>