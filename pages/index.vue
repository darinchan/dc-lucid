<template>
  <b-container fluid>
    <header class="row justify-content-center my-4">
      <img src="../assets/images/lucid-logo.svg" alt="Lucid Logo in header" />
    </header>
    <b-row>
      <div class="hero mb-5">
        <transition appear name="hero-fade">
          <h1 class="pt-3 pt-md-0 col-md-5 col-lg-5">The Future of Luxury Mobility</h1>
        </transition>
        <picture class="mb-5">
          <source
            media="(min-width: 992px)"
            srcset="../assets/images/lucid-air-gallery-009-desktop.jpg"
            alt="Lucid Air in front of airplanes"
          />
          <source
            media="(min-width: 768px)"
            srcset="../assets/images/lucid-air-gallery-009-tablet.jpg"
            alt="Lucid Air in front of airplanes"
          />
          <img
            class="d-block img-fluid w-100"
            src="../assets/images/lucid-air-gallery-009-mobile.jpg"
            alt="Lucid Air in front of airplanes"
          />
        </picture>
      </div>
      <b-col md="8" lg="6" class="mainContent">
        <div
          class="innerContent mb-4 pb-4 mb-md-4 pb-md-4 mr-md-0 pr-md-0 mb-lg-0 pb-lg-0 mr-lg-4 pr-lg-4"
        >
          <h3 class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt accumsan odio, sed pulvinar lacus ullamcorper sit amet. Pellentesque aliquet leo ac mi lacinia condimentum. Ut ut consectetur mauris, sed mollis leo. Nulla facilisi. Ut nec pharetra metus. Maecenas vitae lorem tempor, auctor sapien sed, faucibus velit.</p>

          <p>Phasellus non libero mauris. Proin vel ante volutpat, bibendum leo a, consequat purus. Mauris nulla enim, pretium quis diam vel, imperdiet posuere odio. Duis eleifend vel sapien ac viverra. Fusce tincidunt, sem vitae feugiat rutrum, elit purus porta lacus, ac lobortis ligula justo sed quam. Integer vulputate lorem sed sapien ultricies feugiat sit amet et turpis.</p>
          <!-- <hr class="my-4" /> -->
        </div>
      </b-col>

      <b-col md="8" lg="6" class="newsletter mb-sm-5 mb-md-0">
        <h3 class="mb-4">Morbi ac est urna</h3>
        <b-form @submit="onSubmit" v-if="show">
          <b-row>
            <b-form-group
              id="input-group-1"
              class="col-sm-12 col-md-6"
              label="First Name:"
              label-for="input-1"
            >
              <b-form-input id="input-1" v-model="form.first" :state="validation" required></b-form-input>
              <b-form-invalid-feedback :state="validation"></b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation"></b-form-valid-feedback>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              class="col-sm-12 col-md-6"
              label="Last Name:"
              label-for="input-2"
            >
              <b-form-input id="input-2" v-model="form.last" :state="validation" required></b-form-input>
              <b-form-invalid-feedback :state="validation"></b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation"></b-form-valid-feedback>
            </b-form-group>
          </b-row>
          <b-row>
            <b-form-group
              id="input-group-3"
              class="col-sm-12 col-md-6"
              label="Email:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.email"
                :state="validation"
                type="email"
                required
              ></b-form-input>
              <b-form-invalid-feedback
                :state="validation"
              >This is not a valid e-mail address. (example@gmail.com)</b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation"></b-form-valid-feedback>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              class="col-sm-12 col-md-6"
              label="Country:"
              label-for="input-4"
            >
              <b-form-input list="input-4"></b-form-input>

              <datalist id="input-4">
                <option v-for="country in countries">{{ country }}</option>
              </datalist>
            </b-form-group>
          </b-row>
          <b-button class="px-5 mt-4 mx-auto mr-md-0" type="submit" variant="primary">Sign Me Up</b-button>
        </b-form>
        <transition appear name="thanks-fade">
          <div v-if="!show">Thank you. We will be in touch shortly.</div>
        </transition>
      </b-col>
    </b-row>
    <footer class="footer mt-5 py-5 row">
      <b-col align-self="end" cols="auto" class="mr-auto">
        <img
          class="mb-4"
          src="../assets/images/lucid-logo.svg"
          alt="Lucid Logo in footer"
          width="50%"
        />
        <!-- prettier-ignore -->
        <p>
          7373 Gateway Boulevard
          <span>,</span> Newark, CA 94560 USA
        </p>

        <p>+1 510 648 3553</p>

        <p>Copyright ©2019 Lucid Motors, Inc.</p>
      </b-col>
      <b-col align-self="end" cols="auto">
        <p>
          <a href="#">Privacy</a> |
          <a href="#">Terms of Use</a>
        </p>
      </b-col>
    </footer>
  </b-container>
</template>

<style lang="scss">
// Variables
$lucidBrown: #b18f4e;
$lucidGray: #f6f6f6;
$lucidHeader: 24px;

// Global
html,
body {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
}

.hero-fade-enter-active {
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 1.5s linear;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
}

.thanks-fade-enter-active {
  transition: all 1s ease;
}

.thanks-fade-enter {
  transform: translateY(5px);
  opacity: 0;
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}

// Hero
.hero {
  position: relative;
  h1 {
    position: absolute;
    top: 0;
    // left: 15px;
    font-size: $lucidHeader;
    @media (min-width: 768px) {
      top: auto;
      bottom: 30px;
      color: #fff;
      font-size: 36px;
    }
    @media (min-width: 992px) {
      font-size: 48px;
    }
  }
}
.mainContent {
  height: 100%;
  .innerContent {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    @media (min-width: 992px) {
      border-bottom: 0;
      border-right: 1px solid rgba(0, 0, 0, 1);
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 300;
  }
  p {
    font-size: 14px;
  }
  p:last-child {
    margin-bottom: 0;
  }
}

// Newsletter
.newsletter {
  h3 {
    font-size: $lucidHeader;
    font-weight: 300;
  }
  label {
    font-size: 11px;
  }
  .form-control {
    background-color: $lucidGray;
    border-radius: 0;
  }
  .btn-primary {
    display: flex;
    background-color: $lucidBrown;
    border-color: $lucidBrown;
    border-radius: 0;
  }
}
.footer {
  background: $lucidGray;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        first: "",
        last: "",
        email: "",
        country: null
      },
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua &amp; Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia &amp; Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cruise Ship",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyz Republic",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre &amp; Miquelon",
        "Samoa",
        "San Marino",
        "Satellite",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St Kitts &amp; Nevis",
        "St Lucia",
        "St Vincent",
        "St. Lucia",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor L'Este",
        "Togo",
        "Tonga",
        "Trinidad &amp; Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks &amp; Caicos",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ],
      show: true
    };
  },
  computed: {
    validation() {}
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.show = false;
    }
  }
};
</script>