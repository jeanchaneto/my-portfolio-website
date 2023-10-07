import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
    className=" w-full h-2/3 bottom-0 lg:w-2/3 lg:h-full absolute z-0 right-0 "
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
                enable: false,
            mode: "push",
            },
            onHover : {
                enable: true,
                mode: 'repulse'
            },
            resize: true,
          },
          modes: {
            push: {
                quantity: 90
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            }
          }
        },
        particles: {
            color: {
                value: '#e5e7eb'
            },
            links: {
                color: '#9ca3af',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions: {
                enable: true
            },
            move: {
                directions: 'none',
                enable: true,
                outModes: {
                    default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false
            },
            number: {
                density: {
                   enable: true,
                   area: 800 
                },
                value: 80
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: 'image',
                image: {
                    src: '/images/react-logo.svg', 
                    width: 16,
                    height: 16
                  }
            },
            rotate: {
                value: 0, // Start rotation angle
                animation: {
                  enable: true,
                  speed: 10, // Speed of the rotation
                  sync: false
                }
              },
            size: {
                value: {min: 2, max: 8}
            }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesContainer;
