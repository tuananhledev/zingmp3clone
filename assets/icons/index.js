export const ThemeIcon = ({ size = 16 }) => {
   return (
      <svg width={size} height={size} viewBox="0 0 20 20">
         <defs>
            <linearGradient
               id="j32lhg93hd"
               x1="62.206%"
               x2="18.689%"
               y1="70.45%"
               y2="39.245%"
            >
               <stop offset="0%" stopColor="#F81212"></stop>
               <stop offset="100%" stopColor="red"></stop>
            </linearGradient>
            <linearGradient
               id="hjoavsus6g"
               x1="50%"
               x2="11.419%"
               y1="23.598%"
               y2="71.417%"
            >
               <stop offset="0%" stopColor="#00F"></stop>
               <stop offset="100%" stopColor="#0031FF"></stop>
            </linearGradient>
            <linearGradient
               id="la1y5u3dvi"
               x1="65.655%"
               x2="25.873%"
               y1="18.825%"
               y2="56.944%"
            >
               <stop offset="0%" stopColor="#FFA600"></stop>
               <stop offset="100%" stopColor="orange"></stop>
            </linearGradient>
            <linearGradient
               id="2dsmrlvdik"
               x1="24.964%"
               x2="63.407%"
               y1="8.849%"
               y2="55.625%"
            >
               <stop offset="0%" stopColor="#13EFEC"></stop>
               <stop offset="100%" stopColor="#00E8DF"></stop>
            </linearGradient>
            <filter
               id="4a7imk8mze"
               width="230%"
               height="230%"
               x="-65%"
               y="-65%"
               filterUnits="objectBoundingBox"
            >
               <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3.9"
               ></feGaussianBlur>
            </filter>
            <filter
               id="301mo6jeah"
               width="312.7%"
               height="312.7%"
               x="-106.4%"
               y="-106.4%"
               filterUnits="objectBoundingBox"
            >
               <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3.9"
               ></feGaussianBlur>
            </filter>
            <filter
               id="b2zvzgq7fj"
               width="295%"
               height="295%"
               x="-97.5%"
               y="-97.5%"
               filterUnits="objectBoundingBox"
            >
               <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3.9"
               ></feGaussianBlur>
            </filter>
            <filter
               id="a1wq161tvl"
               width="256%"
               height="256%"
               x="-78%"
               y="-78%"
               filterUnits="objectBoundingBox"
            >
               <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="3.9"
               ></feGaussianBlur>
            </filter>
            <path
               id="qtpqrj1oda"
               d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
            ></path>
            <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
            <path
               id="2eiwxjmc7m"
               d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
            ></path>
         </defs>
         <g fill="none" fillRule="evenodd" transform="translate(2 3)">
            <mask id="tinejqaasb" fill="#fff">
               <use xlinkHref="#qtpqrj1oda"></use>
            </mask>
            <use fill="#FFF" fillOpacity="0" xlinkHref="#qtpqrj1oda"></use>
            <g mask="url(#tinejqaasb)">
               <g transform="translate(-2 -3)">
                  <mask id="uf3ckvfvpf" fill="#fff">
                     <use xlinkHref="#jggzvnjgfc"></use>
                  </mask>
                  <use fill="#D8D8D8" xlinkHref="#jggzvnjgfc"></use>
                  <circle
                     cx="8.9"
                     cy="6.8"
                     r="9"
                     fill="url(#j32lhg93hd)"
                     filter="url(#4a7imk8mze)"
                     mask="url(#uf3ckvfvpf)"
                  ></circle>
                  <circle
                     cx="9.3"
                     cy="13.7"
                     r="5.5"
                     fill="url(#hjoavsus6g)"
                     filter="url(#301mo6jeah)"
                     mask="url(#uf3ckvfvpf)"
                  ></circle>
                  <circle
                     cx="15.9"
                     cy="6.9"
                     r="6"
                     fill="url(#la1y5u3dvi)"
                     filter="url(#b2zvzgq7fj)"
                     mask="url(#uf3ckvfvpf)"
                  ></circle>
                  <circle
                     cx="16.4"
                     cy="17.7"
                     r="7.5"
                     fill="url(#2dsmrlvdik)"
                     filter="url(#a1wq161tvl)"
                     mask="url(#uf3ckvfvpf)"
                  ></circle>
               </g>
            </g>
            <use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m"></use>
         </g>
      </svg>
   );
};

export const MusicBox = ({ size = 20, ...props }) => (
   <svg width={size} height={size} fill="currentColor" {...props}>
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M5.417 2.292a.625.625 0 1 0 0 1.25h9.166a.625.625 0 1 0 0-1.25H5.417ZM2.5 8.333c0-1.726 1.4-3.125 3.125-3.125h8.75c1.726 0 3.125 1.4 3.125 3.125v5.834c0 1.726-1.4 3.125-3.125 3.125h-8.75A3.125 3.125 0 0 1 2.5 14.167V8.333Zm3.125-1.875c-1.036 0-1.875.84-1.875 1.875v5.834c0 1.035.84 1.875 1.875 1.875h8.75c1.036 0 1.875-.84 1.875-1.875V8.333c0-1.035-.84-1.875-1.875-1.875h-8.75ZM12.5 7.3c-1.15 0-2.083.933-2.083 2.083v1.5a2.292 2.292 0 1 0 1.25 2.134V9.383c0-.46.373-.833.833-.833h.73a.625.625 0 1 0 0-1.25h-.73Zm-4.167 5.625a1.042 1.042 0 1 1 2.084 0 1.042 1.042 0 0 1-2.084 0Z"
      />
   </svg>
);

export const Circle = ({ size = 20, ...props }) => (
   <svg width={size} height={size} fill="currentColor" {...props}>
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M2.708 10a7.292 7.292 0 1 1 14.584 0 7.292 7.292 0 0 1-14.584 0ZM10 1.458a8.542 8.542 0 1 0 0 17.084 8.542 8.542 0 0 0 0-17.084ZM7.708 10a2.292 2.292 0 1 1 4.584 0 2.292 2.292 0 0 1-4.584 0ZM10 6.458a3.542 3.542 0 1 0 0 7.084 3.542 3.542 0 0 0 0-7.084Z"
      />
   </svg>
);

export const CircleChart = ({ size = 20, ...props }) => (
   <svg width={size} height={size} fill="currentColor" {...props}>
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M1.467 9.607a8.543 8.543 0 0 1 13.18-6.777.625.625 0 0 1-.68 1.049 7.293 7.293 0 0 0-11.25 5.785.625.625 0 1 1-1.25-.057Zm16.473.132a.625.625 0 0 1 .596.653 8.543 8.543 0 0 1-13.278 6.716.625.625 0 1 1 .695-1.04 7.293 7.293 0 0 0 11.334-5.733.625.625 0 0 1 .653-.596Zm-.645-3.022a.992.992 0 1 0-1.984 0 .992.992 0 0 0 1.984 0Zm-.992-2.242a2.242 2.242 0 1 1-1.024 4.236l-2.355 3.382a.625.625 0 0 1-.955.084l-.833-.832-.948 1.422a.625.625 0 0 1-1.02.028L7.544 10.63l-1.89 1.89a.623.623 0 0 1-.086.071 2.133 2.133 0 1 1-.787-.967L7.17 9.236a.625.625 0 0 1 .942.067l1.527 2.036.881-1.322a.625.625 0 0 1 .962-.095l.844.843 2.038-2.925a2.242 2.242 0 0 1 1.94-3.365ZM3.592 12.512a.883.883 0 1 1 0 1.766.883.883 0 0 1 0-1.766Z"
      />
   </svg>
);

export const CircleMusic = ({ size = 20, ...props }) => (
   <svg width={size} height={size} fill="currentColor" {...props}>
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M9.894 2.233a.625.625 0 0 1-.564.68c-3.597.34-6.413 3.375-6.413 7.07 0 3.923 3.173 7.101 7.084 7.101 3.912 0 7.085-3.178 7.085-7.1a7.077 7.077 0 0 0-1.007-3.651.625.625 0 0 1 1.072-.643 8.328 8.328 0 0 1 1.185 4.293c0 4.611-3.73 8.351-8.335 8.351-4.604 0-8.334-3.74-8.334-8.35 0-4.345 3.311-7.916 7.546-8.315a.625.625 0 0 1 .68.564Zm-.006 2.928a.625.625 0 0 1-.523.713 4.156 4.156 0 0 0-3.511 4.11c0 1.156.47 2.2 1.23 2.955a.625.625 0 0 1-.88.888 5.398 5.398 0 0 1-1.6-3.844A5.406 5.406 0 0 1 9.175 4.64a.625.625 0 0 1 .713.522Zm4.07 2.075a.625.625 0 0 1 .842.269c.383.743.599 1.586.599 2.478A5.403 5.403 0 0 1 10 15.391a.625.625 0 1 1 0-1.25c2.29 0 4.148-1.86 4.148-4.158 0-.688-.167-1.335-.46-1.905a.625.625 0 0 1 .269-.842ZM11.982 1.87a.625.625 0 0 0-.77.668v5.3A2.463 2.463 0 0 0 7.54 9.983c0 1.36 1.1 2.464 2.46 2.464a2.463 2.463 0 0 0 2.46-2.544V3.323a7.065 7.065 0 0 1 1.831 1.01.625.625 0 0 0 .759-.994 8.297 8.297 0 0 0-3.069-1.47Zm-1.98 6.899c-.668 0-1.212.542-1.212 1.214 0 .672.544 1.215 1.211 1.215s1.21-.543 1.21-1.215-.543-1.214-1.21-1.214Z"
      />
   </svg>
);

export const CardText = ({ size = 20, ...props }) => (
   <svg width={size} height={size} fill="currentColor" {...props}>
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M5.625 2.5A3.125 3.125 0 0 0 2.5 5.625v8.747c0 1.726 1.399 3.125 3.125 3.125h8.747c1.726 0 3.125-1.4 3.125-3.125V5.625c0-1.726-1.4-3.125-3.125-3.125H5.625ZM3.75 5.625c0-1.036.84-1.875 1.875-1.875h8.747c1.036 0 1.875.84 1.875 1.875v8.747c0 1.036-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V5.625ZM5.833 5a.625.625 0 1 0 0 1.25H10A.625.625 0 1 0 10 5H5.833Zm-.625 3.125c0-.345.28-.625.625-.625h8.334a.625.625 0 0 1 0 1.25H5.833a.625.625 0 0 1-.625-.625Zm1.459 2.083c-.806 0-1.459.653-1.459 1.459v1.666c0 .806.653 1.459 1.459 1.459h6.666c.806 0 1.459-.653 1.459-1.459v-1.666c0-.806-.653-1.459-1.459-1.459H6.667Zm-.209 1.459c0-.115.094-.209.209-.209h6.666c.115 0 .209.094.209.209v1.666a.208.208 0 0 1-.209.209H6.667a.208.208 0 0 1-.209-.209v-1.666Z"
      />
   </svg>
);

export const MusicNote = ({ size = 20, ...props }) => (
   <svg width={size} height={size} fill="currentColor" {...props}>
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M17.708 2.917a.625.625 0 0 0-.709-.62l-6.906.938-.016.002c-1.535.25-2.786 1.674-2.786 3.221v5.625a3.125 3.125 0 1 0 1.237 2.212.627.627 0 0 0 .013-.128V6.458c0-.91.78-1.828 1.729-1.986l6.188-.84v6.784a3.125 3.125 0 1 0 1.25 2.508V2.917Zm-3.125 8.125a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm-9.166 1.666a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Z"
      />
   </svg>
);

export const Category = ({ size = 20, ...props }) => (
   <svg width={size} height={size} fill="none" {...props}>
      <rect
         x={2.5}
         y={2.5}
         width={6.316}
         height={6.316}
         rx={1.579}
         stroke="currentColor"
         strokeWidth={1.25}
      />
      <rect
         x={11.184}
         y={2.5}
         width={6.316}
         height={6.316}
         rx={3.158}
         stroke="currentColor"
         strokeWidth={1.25}
      />
      <path
         d="M5.854 17.273a.655.655 0 0 1-.392 0c-.916-.33-2.962-1.704-2.962-4.032 0-1.028.786-1.86 1.756-1.86.574 0 1.083.293 1.402.746a1.72 1.72 0 0 1 1.402-.745c.97 0 1.756.831 1.756 1.859 0 2.329-2.047 3.702-2.962 4.032Z"
         stroke="currentColor"
         strokeWidth={1.25}
         strokeLinecap="round"
         strokeLinejoin="round"
      />
      <path
         d="M11.974 11.456v5.772c0 .121.13.197.236.137l5.05-2.886a.158.158 0 0 0 0-.274l-5.05-2.886a.158.158 0 0 0-.236.137Z"
         stroke="currentColor"
         strokeWidth={1.25}
      />
   </svg>
);

export const StarOutline = ({ size = 20, ...props }) => (
   <svg width={size} height={size} fill="none" {...props}>
      <path
         clipRule="evenodd"
         d="m10 14.167-4.151 2.182a.417.417 0 0 1-.605-.44l.793-4.621L2.68 8.014a.417.417 0 0 1 .231-.71l4.64-.675 2.076-4.205a.417.417 0 0 1 .748 0l2.075 4.205 4.64.674c.343.05.48.47.232.711l-3.358 3.274.792 4.622c.059.34-.298.6-.604.439L10 14.167Z"
         stroke="currentColor"
         strokeWidth={1.25}
      />
   </svg>
);

export const MV = ({ size = 20, ...props }) => (
   <svg width={20} height={20} fill="currentColor" {...props}>
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M10 4.375c-1.504 0-3.01.046-4.247.099-1.02.043-1.355.069-1.686.233a2.162 2.162 0 0 0-.762.695c-.195.316-.246.612-.37 1.53A23.196 23.196 0 0 0 2.707 10c0 1.064.1 2.135.226 3.069.125.917.176 1.213.37 1.53.16.257.492.56.763.694.33.164.666.19 1.686.234 1.238.052 2.743.098 4.247.098 1.503 0 3.009-.046 4.247-.098 1.02-.044 1.355-.07 1.686-.234.27-.134.603-.437.762-.695.195-.316.246-.612.37-1.53.128-.933.227-2.004.227-3.068s-.1-2.135-.226-3.069c-.125-.917-.176-1.213-.371-1.53a2.162 2.162 0 0 0-.762-.694c-.331-.164-.667-.19-1.686-.233A101.804 101.804 0 0 0 10 4.375Zm-4.3-1.15c1.248-.054 2.773-.1 4.3-.1 1.527 0 3.051.046 4.3.1l.106.004c.873.037 1.487.063 2.082.358.48.239.99.702 1.27 1.158.35.566.426 1.13.534 1.93l.012.088c.132.97.238 2.1.238 3.237s-.106 2.267-.238 3.237l-.012.088c-.108.8-.184 1.365-.533 1.93-.282.456-.79.92-1.27 1.158-.596.295-1.21.321-2.083.358l-.106.004c-1.249.054-2.773.1-4.3.1-1.527 0-3.052-.046-4.3-.1l-.106-.004c-.874-.037-1.487-.063-2.083-.358a3.394 3.394 0 0 1-1.27-1.158c-.349-.566-.425-1.13-.533-1.93l-.012-.088c-.132-.97-.238-2.1-.238-3.237a24.436 24.436 0 0 1 .25-3.326c.108-.798.184-1.364.533-1.929.282-.456.79-.92 1.27-1.158.596-.295 1.21-.321 2.083-.358l.105-.004Z"
      />
      <path d="M5.004 7.742c.07 0 .143.02.218.06.08.036.14.083.18.143l1.822 2.805-.375-.015 1.868-2.79a.432.432 0 0 1 .367-.203.47.47 0 0 1 .323.128.422.422 0 0 1 .142.33v4.343c0 .13-.042.24-.127.33a.456.456 0 0 1-.338.127.482.482 0 0 1-.345-.127.463.463 0 0 1-.127-.33V9.01l.292.068-1.53 2.332a.612.612 0 0 1-.172.143.334.334 0 0 1-.203.052.352.352 0 0 1-.202-.053.653.653 0 0 1-.165-.142L5.199 9.145l.195-.397v3.795c0 .13-.04.24-.12.33A.413.413 0 0 1 4.96 13a.404.404 0 0 1-.307-.127.479.479 0 0 1-.12-.33V8.2a.44.44 0 0 1 .135-.322.474.474 0 0 1 .337-.136Zm10.338-.007c.125 0 .233.042.323.127.095.08.143.183.143.308a.513.513 0 0 1-.046.203l-1.852 4.335a.48.48 0 0 1-.443.292.51.51 0 0 1-.232-.075.48.48 0 0 1-.172-.21l-1.853-4.35a.318.318 0 0 1-.03-.09.692.692 0 0 1-.008-.098.38.38 0 0 1 .158-.33.503.503 0 0 1 .3-.12c.19 0 .327.098.412.293l1.643 3.863-.263.007 1.508-3.87c.085-.19.223-.285.412-.285Z" />
      <path d="m5.222 7.803-.079.147.012.005.067-.152Zm.18.142.14-.09-.002-.002-.138.092Zm1.822 2.805-.006.166.322.013-.176-.27-.14.091Zm-.375-.015-.138-.093-.166.248.298.011.006-.166Zm1.868-2.79-.137-.096-.002.003.139.093Zm.69-.075-.111.124.11-.124Zm.015 5.003.118.117.003-.003-.121-.114Zm-.683 0-.121.114.007.007.114-.121ZM8.612 9.01l.037-.162-.204-.048v.21h.167Zm.292.068.14.09.13-.2-.232-.053-.038.163Zm-1.53 2.332.13.105.005-.006.005-.008-.14-.091Zm-.172.143-.083-.145-.005.003.088.142Zm-.203.052.012-.166L7 11.438h-.013l.013.167Zm-.202-.053-.088.143.005.002.083-.144Zm-.165-.142-.141.09.005.008.007.008.129-.106ZM5.199 9.145l-.15-.073-.04.083.05.08.14-.09Zm.195-.397h.167l-.316-.074.15.074Zm-.12 4.125.122.114.003-.004-.125-.11Zm-.622 0-.125.11.003.004.122-.114Zm.015-4.995-.115-.122-.003.004.118.118Zm.337.031c.038 0 .083.01.14.04l.156-.294a.627.627 0 0 0-.296-.08v.334Zm.15.046c.058.025.09.054.109.082l.277-.184a.569.569 0 0 0-.252-.203l-.133.305Zm.108.08 1.822 2.806.28-.182L5.54 7.854l-.28.182Zm1.969 2.549-.375-.015-.013.332.375.015.013-.332Zm-.243.244 1.867-2.79-.277-.186-1.867 2.79.277.186ZM8.853 8.04c.067-.096.141-.132.231-.132v-.333c-.21 0-.381.099-.504.273l.273.192Zm.231-.132c.076 0 .145.026.212.085l.222-.248a.637.637 0 0 0-.434-.17v.333Zm.212.085a.256.256 0 0 1 .087.206h.333a.589.589 0 0 0-.198-.454l-.222.248Zm.087.206v4.343h.333V8.2h-.333Zm0 4.343c0 .09-.028.158-.082.215l.242.229a.629.629 0 0 0 .173-.444h-.333Zm-.08.212c-.048.048-.115.078-.219.078v.334a.622.622 0 0 0 .456-.177l-.236-.235Zm-.219.078a.316.316 0 0 1-.23-.082l-.23.243a.648.648 0 0 0 .46.173v-.334Zm-.224-.075a.297.297 0 0 1-.082-.215h-.333c0 .17.057.321.173.444l.242-.229Zm-.082-.215V9.01h-.333v3.533h.333Zm-.204-3.37.293.067.075-.325-.293-.067-.075.324Zm.19-.187-1.53 2.333.28.182 1.53-2.332-.28-.183Zm-1.519 2.319a.446.446 0 0 1-.126.103l.165.29a.778.778 0 0 0 .22-.183l-.259-.21Zm-.13.106a.168.168 0 0 1-.104.028l-.024.332a.5.5 0 0 0 .302-.077l-.175-.283Zm-.129.028a.187.187 0 0 1-.107-.031l-.165.29a.517.517 0 0 0 .298.073l-.026-.332Zm-.102-.028a.487.487 0 0 1-.123-.106l-.258.21a.82.82 0 0 0 .206.18l.175-.284Zm-.111-.09L5.34 9.056l-.282.178L6.491 11.5l.282-.178ZM5.349 9.218l.195-.397-.3-.147-.194.398.299.146Zm-.121-.47v3.795h.333V8.748h-.333Zm0 3.795a.313.313 0 0 1-.078.219l.249.221a.645.645 0 0 0 .162-.44h-.333Zm-.075.215a.247.247 0 0 1-.194.075v.334c.17 0 .321-.058.437-.18l-.243-.229Zm-.194.075a.238.238 0 0 1-.186-.075l-.243.229a.57.57 0 0 0 .43.18v-.334Zm-.183-.071a.313.313 0 0 1-.078-.22h-.333c0 .168.053.318.162.441l.25-.221Zm-.078-.22V8.2h-.333v4.343h.333Zm0-4.342c0-.08.027-.145.087-.205l-.236-.235a.607.607 0 0 0-.184.44h.333Zm.083-.202a.308.308 0 0 1 .223-.089v-.333a.64.64 0 0 0-.452.18l.23.242Zm10.884-.136-.115.122.008.006.107-.128Zm.098.51-.154-.065.153.066Zm-1.853 4.335.152.069.001-.003-.153-.066Zm-.195.225.082.146.002-.002-.084-.144Zm-.248.068-.01.167h.01V13Zm-.232-.075-.092.139.006.004.086-.143Zm-.172-.21-.154.065.001.003.152-.068Zm-1.853-4.35.154-.065-.005-.01-.149.075Zm-.03-.09-.165.024v.003l.165-.027Zm.15-.428.097.136.004-.003-.101-.133Zm.713.173.153-.065v-.002l-.153.067Zm1.642 3.863.005.166.244-.007-.096-.225-.153.066Zm-.263.007-.155-.06-.091.234.251-.007-.005-.167Zm1.508-3.87-.152-.068-.003.008.155.06Zm.412-.118c.083 0 .15.026.209.082l.229-.243a.62.62 0 0 0-.438-.173v.334Zm.216.088a.218.218 0 0 1 .083.18h.333a.55.55 0 0 0-.202-.435l-.214.255Zm.083.18a.348.348 0 0 1-.032.137l.307.131a.679.679 0 0 0 .058-.268h-.333Zm-.032.137-1.852 4.335.306.131 1.853-4.335-.307-.131Zm-1.851 4.332a.314.314 0 0 1-.127.15l.168.287a.647.647 0 0 0 .263-.3l-.304-.137Zm-.125.148a.332.332 0 0 1-.165.046v.334a.666.666 0 0 0 .329-.09l-.164-.29Zm-.155.047a.344.344 0 0 1-.157-.052l-.172.286a.675.675 0 0 0 .308.098l.02-.332Zm-.15-.048a.313.313 0 0 1-.113-.139l-.305.136a.646.646 0 0 0 .233.28l.184-.277Zm-.112-.136L11.363 8.3l-.306.13 1.852 4.35.307-.13Zm-1.857-4.36a.153.153 0 0 1-.015-.042l-.328.054a.484.484 0 0 0 .045.138l.298-.15Zm-.014-.039a.523.523 0 0 1-.006-.073h-.333c0 .039.003.08.009.12l.33-.047Zm-.006-.073c0-.1.033-.155.088-.195l-.194-.271a.546.546 0 0 0-.227.466h.333Zm.092-.198c.087-.066.152-.086.199-.086v-.333a.667.667 0 0 0-.401.154l.202.265Zm.199-.086c.065 0 .112.016.15.043a.346.346 0 0 1 .11.15l.305-.134a.676.676 0 0 0-.223-.288.58.58 0 0 0-.342-.104v.333Zm.26.191 1.642 3.863.306-.13-1.642-3.863-.307.13Zm1.79 3.63-.262.008.01.334.262-.008-.01-.333Zm-.102.236 1.507-3.87-.31-.121-1.508 3.87.31.12Zm1.504-3.863a.334.334 0 0 1 .11-.145.256.256 0 0 1 .15-.041v-.334a.587.587 0 0 0-.564.384l.304.136Z" />
   </svg>
);

export const Loading = ({ size = 40, ...props }) => (
   <svg
      className="lds-spinner"
      width={size}
      height={size}
      fill="#f1f1f1"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{
         background: '0 0',
      }}
      {...props}
   >
      <rect x={47} y={24} rx={3.76} ry={1.92} width={6} height={12}>
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(30 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(60 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(90 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(120 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(150 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(180 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(210 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(240 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(270 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(300 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
         />
      </rect>
      <rect
         x={47}
         y={24}
         rx={3.76}
         ry={1.92}
         width={6}
         height={12}
         transform="rotate(330 50 50)"
      >
         <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
         />
      </rect>
   </svg>
);
