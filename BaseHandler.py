#!/usr/bin/python

__author__ = "Pedro Henrique Prado Oliveira"

import os
import jinja2
import webapp2

template_dir = os.path.join(os.path.dirname(__file__), 'template')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir))


class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render_str(self, template, **parametros):
        t = jinja_env.get_template(template)
        return t.render(parametros)

    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))
