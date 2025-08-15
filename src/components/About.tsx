import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      type: 'Graduation',
      title: 'Bachelor of Information Technology',
      institution: 'Institute of Aeronautical Engineering',
      period: '2021 - 2025',
      icon: GraduationCap
    },
    {
      type: 'experience',
      title: 'Intermediate',
      institution: 'MJP college',
      period: '2019-2021',
      icon: GraduationCap
    },
    {
      type: 'experience',
      title: 'Schooling',
      institution: 'Sage School',
      period: '-2019',
      icon: GraduationCap
    },
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating innovative web solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="portfolio-card">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Full Stack Developer (MERN) with strong problem-solving skills, having solved 200+ problems on LeetCode. Experienced in building end-to-end applications like an AI Resume Generator, DineDirect, and QuickChat. Certified by Meta, AWS, Microsoft, and LinkedIn. Passionate about creating scalable solutions and currently deepening expertise in data structures and algorithmic thinking.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="portfolio-card">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">2025 Graduation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">15+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">IT Graduate</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold gradient-text">
              Education & Experience
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="timeline-item"
                >
                  <div className="portfolio-card">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <span className="text-sm text-primary font-medium">
                            {item.period}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground font-medium mb-2">
                          {item.institution}
                        </p>
                        
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;