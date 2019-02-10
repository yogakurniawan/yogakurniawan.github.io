import React from 'react';
import { Location } from '@reach/router';
import { ThemeProvider, theme } from '../utilities/style';
// import colorThemes from './color-themes';
import Header from '../components/Header';
// import AboutMe from '../AboutMe';

const pageTransitionTime = 500;

// const getCSSVars = (d = {}) => {
//   return {
//     '--color': d.background === 'lighter' ? d.darker : d.lighter,
//     '--background-color': d.background === 'lighter' ? d.lighter : d.darker,
//     '--darker-color': d.darker,
//     '--lighter-color': d.lighter
//   };
// };

class Layout extends React.Component {
  state = {
    prevPage: {}
    // theme: colorThemes[Math.floor(Math.random() * colorThemes.length)]
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        prevPage: {
          pathname: prevProps.location.pathname,
          children: prevProps.children
        }
      });
      setTimeout(() => {
        this.setState({
          prevPage: {}
        });
      }, pageTransitionTime);
    }
  }

  render() {
    const currentComponent = React.cloneElement(this.props.children, {
      animatingIn: this.state.prevPage
    });

    const prevComponent =
      this.state.prevPage.children &&
      React.cloneElement(this.state.prevPage.children, {
        animatingOut: true
      });

    return (
      <div>
        {prevComponent && (
          <div className="page">
            {this.state.prevPage.pathname !== '/' && (
              <Header path={this.state.prevPage.pathname} />
            )}
            <main>{prevComponent}</main>
          </div>
        )}
        <div className={`page ${prevComponent ? 'page--slide-in-top' : ''}`}>
          {this.props.location.pathname !== '/' && (
            <Header path={this.props.location.pathname} />
          )}
          <main>{currentComponent}</main>
        </div>
      </div>
    );
  }
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Location>
      {({ location }) => <Layout location={location}>{children}</Layout>}
    </Location>
  </ThemeProvider>
);
