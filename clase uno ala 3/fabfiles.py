from fabric.api import run, env
from fabric.context_managers import settings, cd, prefix

env.port = 899


def update_static():
    with settings(host_string='mejor@mejorando.la'), cd('~/public_html'):
        run('git pull origin master')


def update_mejor():
    with settings(host_string='mejor@mejorando.la'), cd('~/mejorandola/mejorandola'):
        run('git pull origin master')
        with (prefix('source ../bin/activate')):
            run('./manage.py collectstatic --noinput')
            run('./restart.sh')


def update_devmejor():
    with settings(host_string='devmejor@mejorando.la'), cd('~/mejorandola/mejorandola'):
        run('git pull prod dev')
        with (prefix('source ../bin/activate')):
            run('./manage.py collectstatic --noinput')
            run('./restart.sh')
# def update_mejor():
#     with settings(host_string='mejor@mejorando.la'), cd('~/mejorandola/mejorandola'):
#         run('git pull prod master')
#         with (prefix('source ../bin/activate')):
#             run('./manage.py collectstatic --noinput')
#             run('./restart.sh')


# def update_devmejor():
#     with settings(host_string='devmejor@mejorando.la'), cd('~/mejorandola/mejorandola'):
#         run('git pull prod dev')
#         with (prefix('source ../bin/activate')):
#             run('./manage.py collectstatic --noinput')
#         with (prefix('source ../bin/activate')):
#             run('./start.sh')


def update_cursos():
    with settings(host_string='cursosme@mejorando.la'), cd('~/mejorandola-plataforma/mejorandola-plataforma'):
        run('git pull origin master')
        with (prefix('source ../bin/activate')):
            run('./manage.py collectstatic --noinput')


def update_devcursos():
    with settings(host_string='devcurso@mejorando.la'), cd('~/mejorandola-plataforma/mejorandola-plataforma'):
        run('git pull origin dev')
        with (prefix('source ../bin/activate')):
            run('./manage.py collectstatic --noinput')


def update_conferen():
    with settings(host_string='conferen@mejorando.la'), cd('~/mconf/mconf'):
        run('git pull origin master')
