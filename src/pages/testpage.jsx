import { motion } from "framer-motion";
import { staggerVariants } from "@/utils/motionVariants";
import Logo from "@/components/Logo";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

export default function TestPage() {
  return (
    <main className="bg-gray-950 min-h-[4000px] ">
      <section className=" py-24 sm:py-32 ">
        <motion.svg
          width="161"
          height="13"
          viewBox="0 0 161 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <motion.path
       
         variants={pathVariants}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M152.146 0.543983C151.421 0.874443 150.803 1.32742 150.291 1.9029C150.291 1.90308 150.291 1.90273 150.291 1.9029C150.291 1.90309 150.29 1.9038 150.29 1.90398C149.789 2.47998 149.405 3.12532 149.138 3.83998C149.136 3.84489 149.135 3.8498 149.133 3.85472C148.87 4.55418 148.738 5.27993 148.738 6.03198V6.22398C148.738 6.95254 148.864 7.67065 149.115 8.3783C149.117 8.38553 149.12 8.39276 149.122 8.39998C149.378 9.11375 149.751 9.76367 150.24 10.3498C150.241 10.3505 150.242 10.3512 150.242 10.352C150.244 10.3539 150.246 10.3559 150.247 10.3578C150.748 10.9311 151.359 11.3932 152.082 11.744C152.086 11.7459 152.09 11.7478 152.095 11.7496C152.097 11.7509 152.1 11.7522 152.103 11.7535C152.834 12.0885 153.67 12.256 154.61 12.256C155.552 12.256 156.383 12.0881 157.104 11.7524C157.106 11.7515 157.108 11.7506 157.11 11.7497C157.114 11.7478 157.118 11.7459 157.122 11.744C157.847 11.3924 158.454 10.9292 158.944 10.3542C158.945 10.3539 158.944 10.3544 158.944 10.3542C158.945 10.3537 158.946 10.3525 158.946 10.352C159.448 9.76532 159.821 9.11998 160.066 8.41598C160.071 8.40401 160.075 8.39203 160.079 8.38006C160.08 8.37772 160.081 8.37539 160.081 8.37305C160.327 7.67227 160.45 6.96125 160.45 6.23998V6.03198C160.45 5.28237 160.32 4.55889 160.058 3.86153C160.058 3.85925 160.057 3.85698 160.056 3.85471C160.054 3.8498 160.052 3.84489 160.05 3.83998C159.796 3.12989 159.415 2.48825 158.908 1.91506C158.907 1.91381 158.906 1.91257 158.905 1.91132C158.903 1.90887 158.9 1.90643 158.898 1.90398C158.397 1.32798 157.784 0.874649 157.058 0.543983C157.057 0.54321 157.055 0.542439 157.053 0.541668C156.34 0.201878 155.526 0.0319824 154.61 0.0319824C153.701 0.0319824 152.885 0.199842 152.164 0.53556C152.158 0.538356 152.152 0.541163 152.146 0.543983ZM158.53 2.23998C158.529 2.2383 158.527 2.23662 158.526 2.23495C158.525 2.23363 158.524 2.23232 158.523 2.23101C158.067 1.70437 157.513 1.28745 156.859 0.980258C156.857 0.979045 156.854 0.977833 156.852 0.976624C156.851 0.97641 156.851 0.976196 156.85 0.975983C156.189 0.666649 155.442 0.511982 154.61 0.511982C153.778 0.511982 153.032 0.666649 152.37 0.975983C152.365 0.97863 152.359 0.981285 152.353 0.983948C152.352 0.984786 152.35 0.985624 152.348 0.986464C151.697 1.29461 151.139 1.71212 150.675 2.23898C150.675 2.23931 150.675 2.23965 150.674 2.23998C150.673 2.24098 150.673 2.24198 150.672 2.24298C150.217 2.76199 149.867 3.35454 149.622 4.02064C149.622 4.02144 149.622 4.02224 149.622 4.02304C149.62 4.02602 149.619 4.029 149.618 4.03198C149.385 4.66982 149.263 5.33649 149.251 6.03198C149.251 6.06923 149.25 6.10657 149.25 6.14398C149.25 6.17067 149.25 6.19734 149.251 6.22398C149.259 6.90013 149.377 7.56146 149.602 8.20798C149.604 8.21393 149.606 8.21987 149.609 8.2258C149.842 8.88733 150.179 9.48663 150.619 10.0237C150.622 10.0262 150.624 10.0288 150.626 10.0313C150.626 10.0311 150.626 10.0315 150.626 10.0313C151.08 10.5594 151.634 10.9837 152.287 11.3026C152.29 11.3038 152.292 11.3051 152.295 11.3063C152.299 11.3082 152.302 11.3101 152.306 11.312C152.978 11.6213 153.746 11.776 154.61 11.776C155.474 11.776 156.237 11.6213 156.898 11.312C156.902 11.3101 156.906 11.3082 156.91 11.3063C156.912 11.3055 156.913 11.3046 156.915 11.3038C157.569 10.9847 158.118 10.5608 158.562 10.032C158.563 10.0306 158.565 10.0292 158.566 10.0278C158.566 10.028 158.566 10.0276 158.566 10.0278C159.014 9.49491 159.351 8.90004 159.574 8.24443C159.574 8.24301 159.575 8.24159 159.575 8.24016C159.579 8.22945 159.583 8.21873 159.586 8.20798C159.81 7.56656 159.927 6.91056 159.938 6.23998C159.938 6.20802 159.938 6.17601 159.938 6.14398C159.938 6.10657 159.938 6.06923 159.937 6.03198C159.926 5.33649 159.803 4.66982 159.57 4.03198C159.569 4.02899 159.568 4.02599 159.567 4.023C159.566 4.02005 159.565 4.01711 159.564 4.01416C159.329 3.34942 158.985 2.75803 158.53 2.23998Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M141.222 11.9999H141.734V0.799946H145.574V0.319946H137.382V0.799946H141.222V11.9999Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M129.376 7.328V7.776H134.304V7.328H129.376Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118.579 0.319946V11.9999H125.043V11.5199H119.091V6.30395H124.419V5.82395H119.091V0.799946H124.835V0.319946H118.579Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M103.502 11.9999H104.014V0.799946H104.206L111.518 11.9999H112.494V0.319946H111.982V11.5199H111.79L104.478 0.319946H103.502V11.9999Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M88.4243 11.9999H88.9363L90.5305 7.83995H96.6381L98.2963 11.9999H98.8243L94.1683 0.319946H92.9203L88.4243 11.9999ZM90.7144 7.35995H96.4468L93.832 0.799946H93.2283L90.7144 7.35995Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.2475 11.9999H83.7595V0.319946H83.2475V5.99995H75.4715V0.319946H74.9595V11.9999H75.4715V6.47995H83.2475V11.9999Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M60.7997 1.93598C60.3309 2.51132 59.9792 3.15582 59.7445 3.8695C59.7443 3.87033 59.744 3.87116 59.7437 3.87198C59.7435 3.87275 59.7432 3.87352 59.743 3.87429C59.5195 4.58821 59.4077 5.31278 59.4077 6.04798V6.23998C59.4077 6.92191 59.5195 7.61981 59.743 8.33367C59.7432 8.33444 59.7435 8.33521 59.7437 8.33598C59.9677 9.03998 60.3144 9.69065 60.7837 10.288C60.79 10.2958 60.7963 10.3036 60.8026 10.3114C60.8049 10.3143 60.8072 10.3171 60.8095 10.32C61.2749 10.8919 61.8636 11.3559 62.5757 11.712C62.5876 11.7179 62.5994 11.7238 62.6114 11.7296C62.6142 11.731 62.617 11.7324 62.6199 11.7338C63.3358 12.0819 64.1798 12.256 65.1517 12.256C66.0797 12.256 66.8957 12.0906 67.5997 11.76C67.9081 11.6105 68.1918 11.4354 68.4511 11.2348C68.4519 11.2341 68.4527 11.2335 68.4535 11.2329C68.7851 10.9758 69.0765 10.6769 69.3277 10.336C69.5809 9.99235 69.783 9.61635 69.934 9.20798C70.0409 8.91881 70.1222 8.61341 70.1779 8.29178C70.1827 8.26397 70.1873 8.23604 70.1917 8.20798H69.6797C69.5589 8.9264 69.3133 9.54127 68.9431 10.0526C68.7252 10.3536 68.4641 10.6187 68.1597 10.848C67.9202 11.0308 67.6639 11.1866 67.3909 11.3153C67.389 11.3162 67.3872 11.3171 67.3854 11.3179C66.7356 11.6233 65.991 11.776 65.1517 11.776C64.2664 11.776 63.493 11.616 62.8317 11.296C62.8189 11.2895 62.8062 11.283 62.7935 11.2764C62.1597 10.9483 61.6285 10.5228 61.1997 9.99998C61.1934 9.99197 61.1872 9.98394 61.1809 9.97589C61.18 9.97472 61.1791 9.97356 61.1782 9.97239C60.7631 9.43656 60.4508 8.83914 60.241 8.18011C60.2408 8.17939 60.2406 8.17868 60.2403 8.17796C60.2401 8.1773 60.2399 8.17664 60.2397 8.17598C60.0364 7.53549 59.93 6.89016 59.9204 6.23998C59.9199 6.20799 59.9197 6.17599 59.9197 6.14398C59.9197 6.11192 59.9199 6.07992 59.9203 6.04798C59.9292 5.34765 60.0354 4.67652 60.2389 4.03458C60.2392 4.03371 60.2394 4.03285 60.2397 4.03198C60.2402 4.03061 60.2406 4.02924 60.2411 4.02787C60.4606 3.36021 60.7772 2.76915 61.1908 2.25468C61.1918 2.25351 61.1927 2.25233 61.1937 2.25116C61.201 2.24207 61.2083 2.23302 61.2157 2.22398C61.6443 1.70135 62.165 1.29139 62.778 0.994099C62.7905 0.988013 62.8031 0.981974 62.8157 0.975983C63.4557 0.666649 64.1917 0.511982 65.0237 0.511982C65.7917 0.511982 66.4904 0.650649 67.1197 0.927982C67.1567 0.944022 67.1933 0.960489 67.2296 0.977385C67.2314 0.978223 67.2332 0.979062 67.235 0.979902C67.8227 1.255 68.307 1.64302 68.6877 2.14398C68.7109 2.17453 68.7336 2.20545 68.7558 2.23673C69.1213 2.75161 69.3492 3.36603 69.4397 4.07998H69.9517C69.9492 4.05861 69.9465 4.03732 69.9438 4.01609C69.9009 3.68715 69.8295 3.37511 69.7297 3.07998C69.5915 2.67161 69.3989 2.29561 69.1517 1.95198C69.1268 1.91728 69.1014 1.88304 69.0755 1.84924C68.6488 1.29086 68.1035 0.855777 67.4397 0.543983C67.3984 0.52394 67.3567 0.504486 67.3147 0.485621C67.3137 0.485214 67.3128 0.484807 67.3119 0.484401C66.6387 0.182788 65.876 0.0319824 65.0237 0.0319824C64.1035 0.0319824 63.296 0.196022 62.6013 0.524101C62.6002 0.524608 62.5991 0.525115 62.598 0.525624C62.5852 0.531687 62.5725 0.537807 62.5597 0.543983C61.8686 0.879092 61.2905 1.33244 60.8255 1.90401C60.8253 1.9043 60.825 1.90459 60.8248 1.90487C60.8164 1.9152 60.808 1.92557 60.7997 1.93598Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.4648 11.9999H39.9768V0.799946H40.1688L47.4808 11.9999H48.4568V0.319946H47.9448V11.5199H47.7528L40.4408 0.319946H39.4648V11.9999Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.3872 11.9999H24.8992L26.4934 7.83995H32.601L34.2592 11.9999H34.7872L30.1312 0.319946H28.8832L24.3872 11.9999ZM26.6773 7.35995H32.4097L29.7949 0.799946H29.1912L26.6773 7.35995Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.1406 0.319946V11.9999H20.6046V11.5199H14.6526V6.30395H19.9806V5.82395H14.6526V0.799946H20.3966V0.319946H14.1406Z"
            fill="#F3F4F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.24784 8.01595H0.73584V8.46395C0.73584 8.48536 0.735952 8.50669 0.736176 8.52795C0.737941 8.69551 0.746662 8.85818 0.76234 9.01595C0.816004 9.55597 0.951171 10.0386 1.16784 10.4639C1.3214 10.7546 1.51021 11.0129 1.73427 11.2387C1.73635 11.2408 1.73844 11.2429 1.74053 11.245C1.95078 11.4557 2.19188 11.638 2.46384 11.7919C3.02917 12.1013 3.70651 12.2559 4.49584 12.2559C5.29584 12.2559 5.97317 12.1013 6.52784 11.7919C6.79852 11.6387 7.03741 11.4574 7.24451 11.2479C7.24455 11.2479 7.24447 11.248 7.24451 11.2479C7.4699 11.02 7.65776 10.7585 7.80784 10.4639C8.09818 9.91437 8.2474 9.26904 8.25549 8.52795C8.25572 8.50669 8.25584 8.48536 8.25584 8.46395V0.319946H2.31984V0.799946H7.74384V8.52795C7.74384 9.18739 7.62157 9.75686 7.37704 10.2364C7.37594 10.2385 7.37484 10.2407 7.37374 10.2428C7.24699 10.4898 7.08769 10.7129 6.89584 10.9119C6.71996 11.0946 6.51941 11.2483 6.2942 11.373C6.29331 11.3735 6.29243 11.374 6.29154 11.3745C5.80697 11.6421 5.2084 11.7759 4.49584 11.7759C3.78603 11.7759 3.18688 11.6432 2.69839 11.3776C2.69638 11.3765 2.69437 11.3754 2.69237 11.3743C2.46389 11.2493 2.25972 11.0952 2.07984 10.9119C1.89068 10.7119 1.73377 10.4876 1.60912 10.2391C1.60802 10.237 1.60692 10.2348 1.60583 10.2326C1.36717 9.75385 1.24784 9.18565 1.24784 8.52795V8.01595Z"
            fill="#F3F4F6"
          />
        </motion.svg>
      </section>
    </main>
  );
}

