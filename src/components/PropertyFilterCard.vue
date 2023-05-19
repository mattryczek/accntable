<template>
    <h1 class="display-6 fs-1">Filters</h1>
    <div class="overflow-scroll" id="filters">
        <hr>

        <!-- Bed -->
        <div class="container">
            <div class="row">Beds</div>

            <div class="row d-flex flex-nowrap mt-2">
                <select class="form-select form-select-sm flex-fill me-2" aria-label=".form-select-sm example">
                    <option>min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select class="form-select form-select-sm flex-fill ms-2" aria-label=".form-select-sm example">
                    <option>max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            </div>

        </div>
        <hr>
        <!-- End Bed -->

        <!-- Bath -->
        <div class="container">
            <div class="row">Baths</div>

            <div class="row d-flex flex-nowrap mt-2">
                <select class="form-select form-select-sm flex-fill me-2" aria-label=".form-select-sm example">
                    <option>min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select class="form-select form-select-sm flex-fill ms-2" aria-label=".form-select-sm example">
                    <option>max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            </div>

        </div>
        <hr>
        <!-- End Bath -->

        <!-- Parking -->
        <div class="container">
            <div class="row">Parking Spots</div>

            <div class="row d-flex flex-nowrap mt-2">
                <select class="form-select form-select-sm flex-fill me-2" aria-label=".form-select-sm example">
                    <option>min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select class="form-select form-select-sm flex-fill ms-2" aria-label=".form-select-sm example">
                    <option>max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            </div>

        </div>
        <hr>
        <!-- End Parking -->

        <!-- Rent -->
        <div class="container">
            <div class="row">Rent</div>

            <div class="row d-flex flex-nowrap mt-2">
                <input class="flex-fill me-2 form-control form-control-sm" type="text" placeholder="min">

                <input class="flex-fill ms-2 form-control form-control-sm" type="text" placeholder="max">
            </div>

        </div>
        <hr>
        <!-- End Rent -->

        <!-- Laundry -->
        <div class="d-flex">
            <div class="me-auto">
                Laundry
            </div>

            <select class="form-select form-select-sm flex-fill ms-4" aria-label=".form-select-sm example">
                <option></option>
                <option value="In Unit">In Unit</option>
                <option value="On Property Premise">On Site</option>
            </select>
        </div>
        <hr>
        <!-- End Laundry -->

        <!-- Lease Type -->
        <div class="d-flex">
            <div class="me-auto">
                Lease Type
            </div>

            <select class="form-select form-select-sm flex-fill ms-4" aria-label=".form-select-sm example">
                <option></option>
                <option value="Annual">Annual</option>
                <option value="Month-to-Month">Month-to-Month</option>
            </select>
        </div>
        <hr>
        <!-- End Lease -->

        <!-- Transit -->
        <div class="d-flex">
            <div class="col-8">
                Transit Distance
                <span title="Distance to train or public transportation in miles">❓</span>
            </div>
            <input class="form-control form-control-sm" type="text" placeholder="mi.">
        </div>
        <hr>
        <!-- End Transit -->

        <!-- POI -->
        <div class="d-flex">
            <div class="col-8">
                POI Distance
                <span title="Distance to points of interest such as grocers and malls.">❓</span>
            </div>
            <input class="form-control form-control-sm" type="text" placeholder="mi.">
        </div>
        <hr>
        <!-- End POI -->

        <!-- Violations -->
        <div class="d-flex">
            <div class="col-8">
                Violations
            </div>
            <input class="form-control form-control-sm" type="text" placeholder="max">
        </div>
        <hr>
        <!-- End Violations -->

        <!-- Bedbugs -->
        <div class="d-flex">
            <div class="col-8">
                Bedbug Reports
            </div>
            <input class="form-control form-control-sm" type="text" placeholder="max">
        </div>
        <hr>
        <!-- End Bedbugs -->

        <!-- Gym -->
        <div class="d-flex">
            <div class="me-auto">
                Gym in Building
            </div>
            <div class="form-check form-switch me-2">
                <input class="form-check-input" type="checkbox" role="switch" id="gym_switch">
            </div>
        </div>
        <hr>
        <!-- End Gym -->

        <!-- Pets -->
        <div class="d-flex">
            <div class="me-auto">
                Pets Allowed
            </div>
            <div class="form-check form-switch me-2">
                <input class="form-check-input" type="checkbox" role="switch" id="gym_switch">
            </div>
        </div>
        <hr>
        <!-- End Pets -->

    </div>
</template>

<style>

</style>