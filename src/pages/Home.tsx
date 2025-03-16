import Python from "../assets/images/python_programming.jpg";
import DataAnalysis from "../assets/images/python_data_analysis.jpg";
import MachineLearning from "../assets/images/python_machine_learning.jpg";
import ProgrammingHard from "../assets/images/programming_hard.jpg";
import DotEnv from "../assets/images/dot-env.jpg";
import ReactThumb from "../assets/images/react-thumbnails.jpg";
import HeroImage from "../assets/images/hero-image.png";
import {
  FaChartLine,
  FaGlobe,
  FaExternalLinkAlt,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Paper,
  Divider,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BarChartIcon from '@mui/icons-material/BarChart';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #008374 0%, #006d61 100%)',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          py: 8
        }}
      >
        {/* Abstract background shapes */}
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
          <Box 
            sx={{ 
              position: 'absolute', 
              top: '5rem', 
              left: '2.5rem', 
              width: '18rem', 
              height: '18rem', 
              bgcolor: 'white', 
              borderRadius: '50%', 
              mixBlendMode: 'overlay', 
              filter: 'blur(40px)',
              animation: 'pulse 3s infinite'
            }} 
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: '5rem', 
              right: '2.5rem', 
              width: '24rem', 
              height: '24rem', 
              bgcolor: 'white', 
              borderRadius: '50%', 
              mixBlendMode: 'overlay', 
              filter: 'blur(40px)',
              animation: 'pulse 3s infinite',
              animationDelay: '1.5s'
            }} 
          />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={6} sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 800, 
                  color: 'white',
                  mb: 1,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Programming for
                <Box component="span" display="block">Data Science</Box>
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  my: 3, 
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.6,
                  maxWidth: { lg: '90%' }
                }}
              >
                We teach people to Programming for Data Science and Web
                Development. We also Develop Software solutions for individuals
                and organizations
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ 
                  mt: 4, 
                  justifyContent: { xs: 'center', lg: 'flex-start' } 
                }}
              >
                <Button 
                  variant="contained" 
                  size="large"
                  href="https://science.dataidea.org"
                  sx={{ 
                    bgcolor: 'white', 
                    color: '#008374', 
                    px: 4, 
                    py: 1.5,
                    '&:hover': { 
                      bgcolor: '#f0f0f0',
                      transform: 'translateY(-2px)'
                    },
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  href="/#blog"
                  sx={{ 
                    borderColor: 'white', 
                    color: 'white', 
                    px: 4, 
                    py: 1.5,
                    '&:hover': { 
                      borderColor: 'white', 
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)'
                    },
                    fontWeight: 600,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Grid>
            <Grid 
              item 
              xs={12} 
              lg={6} 
              sx={{ 
                display: { xs: 'none', lg: 'flex' },
                justifyContent: 'center'
              }}
            >
              <Box 
                component="img"
                src={HeroImage}
                alt="Programming and Data Science"
                sx={{
                  width: '85%',
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.2))',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick Links Section */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                bgcolor: '#f9f9f9', 
                borderRadius: 2,
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BarChartIcon sx={{ fontSize: 28, color: '#333', mr: 1 }} />
                <Typography variant="h5" component="h2" fontWeight="bold">
                  Data Science
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3 }}>
                A comprehensive and dynamic course designed to equip you with
                the skills to thrive in data science.
              </Typography>
              <Button 
                variant="contained"
                href="https://science.dataidea.org"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  bgcolor: 'black', 
                  '&:hover': { bgcolor: '#333' },
                  borderRadius: 2,
                  textTransform: 'none'
                }}
              >
                Get Started
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                bgcolor: '#f0f9fa', 
                borderRadius: 2,
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LanguageIcon sx={{ fontSize: 28, color: '#008374', mr: 1 }} />
                <Typography variant="h5" component="h2" fontWeight="bold">
                  Web Development
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3 }}>
                A comprehensive subject designed to cover the various
                programming components essential for web development.
              </Typography>
              <Button 
                variant="contained"
                href="https://web.dataidea.org"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  bgcolor: '#008374', 
                  '&:hover': { bgcolor: '#006d61' },
                  borderRadius: 2,
                  textTransform: 'none'
                }}
              >
                Get Started
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Courses Section */}
      <Box sx={{ bgcolor: '#f0f9fa', py: 8 }}>
        <Container maxWidth="xl">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            sx={{ 
              color: '#008374', 
              fontWeight: 'bold', 
              mb: 6 
            }}
          >
            Browse Courses
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                image: Python,
                description: "Start with the basics of Python, a versatile and powerful programming language. This course lays the foundation for your data science journey",
                instructor: "Juma Shafara",
                details: "4 Weeks 15 Seats",
                link: "https://science.dataidea.org/Python/00_python_programming_outline.html"
              },
              {
                image: DataAnalysis,
                description: "Explore data analysis using libraries like Pandas, NumPy, and Matplotlib. Learn to transform raw data into actionable insights",
                instructor: "Juma Shafara",
                details: "4 Weeks 10 seats",
                link: "https://science.dataidea.org/Python-Data-Analysis/python_data_analysis_outline.html"
              },
              {
                image: MachineLearning,
                description: "Discover the principles of machine learning and gain hands-on experience in building and optimizing models",
                instructor: "Juma Shafara",
                details: "4 Weeks 10 seats",
                link: "https://science.dataidea.org/Python-Data-Analysis/Week4-ML-Intro/41_overview_of_machine_learning.html"
              }
            ].map((course, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={course.image}
                    alt={`Course ${index + 1}`}
                    sx={{ height: 200 }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {course.description}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#008374', fontWeight: 'medium', mb: 1 }}>
                      {course.instructor}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {course.details}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      variant="contained" 
                      size="small" 
                      href={course.link}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        ml: 'auto', 
                        bgcolor: '#008374', 
                        '&:hover': { bgcolor: '#006d61' },
                        borderRadius: 1,
                        textTransform: 'none'
                      }}
                    >
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button 
              variant="contained" 
              href="https://science.dataidea.org"
              sx={{ 
                bgcolor: 'black', 
                color: 'white', 
                py: 1.5, 
                px: 4,
                borderRadius: 2,
                '&:hover': { bgcolor: '#333' },
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              View All Courses
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Blog Section */}
      <Box sx={{ bgcolor: '#f9f9f9', py: 8 }}>
        <Container maxWidth="xl">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            sx={{ 
              color: '#008374', 
              fontWeight: 'bold', 
              mb: 6 
            }}
          >
            Latest on the Blog
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                image: ReactThumb,
                description: "In this guide, we'll create a new React project with Vite, TypeScript, Tailwind CSS, and add a basic navigation bar using React components.",
                date: "Nov 7, 2024",
                author: "Juma Shafafa",
                link: "https://jumashafara.dataidea.org/posts/2024/react-naviagaion/"
              },
              {
                image: DotEnv,
                description: "Environment variables are crucial in programming for storing sensitive information",
                date: "Oct 31, 2024",
                author: "Juma Shafara",
                link: "https://jumashafara.dataidea.org/posts/2024/setting-up-dotenv/"
              },
              {
                image: ProgrammingHard,
                description: "Why is programming so difficult to learn, and how can you make the process smoother? Let's dive in.",
                date: "Aug 12, 2024",
                author: "Juma Shafara",
                link: "https://jumashafara.dataidea.org/posts/2024/why-coding-is-hard/"
              }
            ].map((blog, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={blog.image}
                    alt={`Blog post ${index + 1}`}
                    sx={{ height: 200 }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {blog.description}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#008374', fontWeight: 'medium', mb: 1 }}>
                      {blog.date}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {blog.author}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      variant="contained" 
                      size="small" 
                      href={blog.link}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        ml: 'auto', 
                        bgcolor: '#008374', 
                        '&:hover': { bgcolor: '#006d61' },
                        borderRadius: 1,
                        textTransform: 'none'
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button 
              variant="contained" 
              href="https://blog.dataidea.org"
              sx={{ 
                bgcolor: 'black', 
                color: 'white', 
                py: 1.5, 
                px: 4,
                borderRadius: 2,
                '&:hover': { bgcolor: '#333' },
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              View All Blogs
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#008374', color: 'white', py: 4 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              © 2024 DataIdea. All rights reserved.
            </Typography>
            <Stack 
              direction="row" 
              spacing={3} 
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Button 
                href="https://twitter.com/dataideaorg" 
                color="inherit"
                startIcon={<TwitterIcon />}
                sx={{ '&:hover': { color: 'rgba(255,255,255,0.8)' }, textTransform: 'none' }}
              >
                Twitter
              </Button>
              <Button 
                href="https://youtube.com/@dataideascience" 
                color="inherit"
                startIcon={<YouTubeIcon />}
                sx={{ '&:hover': { color: 'rgba(255,255,255,0.8)' }, textTransform: 'none' }}
              >
                YouTube
              </Button>
              <Button 
                href="https://linkedin.com/company/dataideaorg" 
                color="inherit"
                startIcon={<LinkedInIcon />}
                sx={{ '&:hover': { color: 'rgba(255,255,255,0.8)' }, textTransform: 'none' }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
