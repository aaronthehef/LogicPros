import React from 'react';
import { Button, AppBar, Toolbar, Typography, Container, Grid, Card, CardContent } from "@mui/material";

export const SimpleLandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LogicPros
          </Typography>
          <Button color="inherit">Page</Button>
          <Button color="inherit">Page</Button>
          <Button color="inherit">Page</Button>
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Button
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <div style={{ 
          height: '300px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px',
          marginBottom: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Typography variant="h4" color="textSecondary">Hero Image</Typography>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            LogicPros
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Subheading that sets up context, shares more info about the website,
            or generally gets people psyched to keep scrolling.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Button
          </Button>
        </div>
      </Container>

      {/* Section 1 */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Section heading
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Card>
                <div style={{ height: '200px', backgroundColor: '#f0f0f0' }} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Subheading
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Body text for whatever you'd like to add more to the subheading.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Section 2 */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Section heading
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Typography variant="h6" gutterBottom>
                Subheading
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Body text for whatever you'd like to expand on the main point.
              </Typography>
            </Grid>
          ))}
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Button
          </Button>
          <Button variant="outlined" color="primary">
            Secondary button
          </Button>
        </div>
      </Container>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Section heading
        </Typography>
        <Grid container spacing={4}>
          {[
            "A terrific piece of praise",
            "A fantastic bit of feedback", 
            "A genuinely glowing review"
          ].map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  "{testimonial}"
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#e0e0e0', 
                    borderRadius: '50%',
                    marginRight: '1rem'
                  }} />
                  <div>
                    <Typography variant="subtitle2">Name</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Description
                    </Typography>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Container maxWidth="lg" sx={{ py: 4, borderTop: '1px solid #e0e0e0' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Topic</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Topic</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Topic</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
            <Typography variant="body2" color="textSecondary">Page</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Site name</Typography>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: '#e0e0e0', 
                  borderRadius: '4px' 
                }} />
              ))}
            </div>
          </Grid>
        </Grid>
        
        <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="h4" gutterBottom>Section heading</Typography>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Button
          </Button>
          <Button variant="outlined" color="primary">
            Secondary button
          </Button>
        </div>
      </Container>
    </div>
  );
};