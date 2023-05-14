<script setup>
import InlineRadio from '@comp/InlineRadio.vue'

</script>

<template>
    <div class="card my-4">
        <div class="card-body">
            <h5 class="card-title mb-2">Submit a Review</h5>
            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Name">
                        <label for="floatingInput">Enter Your Name</label>
                    </div>

                    <div class="form-floating">
                        <textarea rows="6" style="height:100%;" class="form-control" placeholder="Leave a comment here"
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
            <form>


            </form>
        </div>
    </div>
</template>