import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that provides current weather information and forecasts for multiple cities worldwide.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&crop=center',
      tech: ['React', 'API Integration', 'Chart.js', 'CSS'],
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, user authentication, commenting system, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=800&h=600&fit=crop&crop=center',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills with smooth animations and modern design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, emoji support, and user presence indicators.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop&crop=center',
      tech: ['React', 'Socket.io', 'Node.js', 'Express'],
      liveUrl: '#',
      codeUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, index, featured = false }: { project: any, index: number, featured?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`project-card group ${featured ? 'lg:col-span-2' : ''}`}
    >
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="project-image w-full h-48 object-cover group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="btn-gradient">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm">
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold gradient-text">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3 pt-2">
          <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary-glow">
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </Button>
          <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary-glow">
            <Github className="w-4 h-4 mr-1" />
            View Code
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured={true}
            />
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">
            More Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + featuredProjects.length}
              />
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button className="btn-outline-glow text-lg px-8 py-3">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
