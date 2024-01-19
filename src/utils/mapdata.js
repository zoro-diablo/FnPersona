var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#318cda",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#000000",
    state_hover_color: "#d3d5d8",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#000000",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: " "
    },
    AK: {
      name: "Alaska",
      description: " "
    },
    FL: {
      name: "Florida",
      description: " "
    },
    NH: {
      name: "New Hampshire",
      description: " "
    },
    VT: {
      name: "Vermont",
      description: " "
    },
    ME: {
      name: "Maine",
      description: " "
    },
    RI: {
      name: "Rhode Island",
      description: " "
    },
    NY: {
      name: "New York",
      description: " "
    },
    PA: {
      name: "Pennsylvania",
      description: " "
    },
    NJ: {
      name: "New Jersey",
      description: " "
    },
    DE: {
      name: "Delaware",
      description: " "
    },
    MD: {
      name: "Maryland",
      description: " "
    },
    VA: {
      name: "Virginia",
      description: " "
    },
    WV: {
      name: "West Virginia",
      description: " "
    },
    OH: {
      name: "Ohio",
      description: " "
    },
    IN: {
      name: "Indiana",
      description: " "
    },
    IL: {
      name: "Illinois",
      description: " "
    },
    CT: {
      name: "Connecticut",
      description: " "
    },
    WI: {
      name: "Wisconsin",
      description: " "
    },
    NC: {
      name: "North Carolina",
      description: " "
    },
    DC: {
      name: "District of Columbia",
      description: " "
    },
    MA: {
      name: "Massachusetts",
      description: " "
    },
    TN: {
      name: "Tennessee",
      description: " "
    },
    AR: {
      name: "Arkansas",
      description: " "
    },
    MO: {
      name: "Missouri",
      description: " "
    },
    GA: {
      name: "Georgia",
      description: " "
    },
    SC: {
      name: "South Carolina",
      description: " "
    },
    KY: {
      name: "Kentucky",
      description: " "
    },
    AL: {
      name: "Alabama",
      description: " "
    },
    LA: {
      name: "Louisiana",
      description: " "
    },
    MS: {
      name: "Mississippi",
      description: " "
    },
    IA: {
      name: "Iowa",
      description: " "
    },
    MN: {
      name: "Minnesota",
      description: " "
    },
    OK: {
      name: "Oklahoma",
      description: " "
    },
    TX: {
      name: "Texas",
      description: " "
    },
    NM: {
      name: "New Mexico",
      description: " "
    },
    KS: {
      name: "Kansas",
      description: " "
    },
    NE: {
      name: "Nebraska",
      description: " "
    },
    SD: {
      name: "South Dakota",
      description: " "
    },
    ND: {
      name: "North Dakota",
      description: " "
    },
    WY: {
      name: "Wyoming",
      description: " "
    },
    MT: {
      name: "Montana",
      description: " "
    },
    CO: {
      name: "Colorado",
      description: " "
    },
    UT: {
      name: "Utah",
      description: " "
    },
    AZ: {
      name: "Arizona",
      description: " "
    },
    NV: {
      name: "Nevada",
      description: " "
    },
    OR: {
      name: "Oregon",
      description: " "
    },
    WA: {
      name: "Washington",
      description: " "
    },
    CA: {
      name: "California",
      description: " "
    },
    MI: {
      name: "Michigan",
      description: " "
    },
    ID: {
      name: "Idaho",
      description: " "
    },
    GU: {
      hide: "yes",
      name: "Guam",
      description: " "
    },
    VI: {
      hide: "yes",
      name: "Virgin Islands",
      description: " "
    },
    PR: {
      hide: "yes",
      name: "Puerto Rico",
      description: " "
    },
    MP: {
      hide: "yes",
      name: "Northern Mariana Islands",
      description: " "
    },
    AS: {
      hide: "yes",
      name: "American Samoa",
      description: " "
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};