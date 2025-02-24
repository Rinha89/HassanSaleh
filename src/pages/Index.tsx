
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Briefcase, GraduationCap, Award, BookOpen, Mail, LineChart, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
    { title: "Project 3", description: "Description of project 3" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Who Section */}
      <section id="who" className="pt-20 pb-16 container mx-auto px-4 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Who Am I?</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            [Your introduction here] A passionate professional with experience in data science and software development.
            I specialize in turning complex data into actionable insights and creating efficient solutions.
          </p>
        </div>
      </section>

      {/* Knowledge and Skills */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Knowledge & Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Python', 'Data Analysis', 'Machine Learning'].map((skill) => (
              <Card key={skill} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{skill}</h3>
                <p className="text-gray-600">Applied in various projects including...</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">University Name</h3>
                  <p className="text-gray-600 mt-2">Degree Details</p>
                  <p className="text-gray-600 mt-2">Key courses and projects...</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Company Name</h3>
                  <p className="text-gray-500">Position • Duration</p>
                  <p className="text-gray-600 mt-2">Key responsibilities and achievements...</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Projects */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Data Projects</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="relative">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{projects[currentSlide].title}</h3>
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
                    >
                      Next
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600">{projects[currentSlide].description}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <Award className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-semibold">Certificate Name</h3>
              <p className="text-gray-600 mt-2">Issuing Organization</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <BookOpen className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-semibold">Course Name</h3>
              <p className="text-gray-600 mt-2">Description and key learnings...</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Site Design */}
      <section id="design" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Site Design</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <Code className="w-6 h-6 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Design Process</h3>
              <p className="text-gray-600">Details about the SRS document and implementation process...</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="max-w-md mx-auto text-center">
            <Mail className="w-8 h-8 mx-auto mb-4" />
            <p className="text-lg mb-4">Get in touch with me</p>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
