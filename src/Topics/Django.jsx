import './css/python.css';

function Django() {
  return (
    <div className="python-container">
      <h1>Django (Python Web Framework)</h1>

      <h2>Set up</h2>
      <ol>
        <li><code>pip install django</code></li>
        <li><code>django-admin startproject mysite</code></li>
        <li><code>python manage.py startapp app_name</code></li>
        <li>Run server: <code>python manage.py runserver</code></li>
        <li>Migrate: <code>python manage.py migrate</code></li>
        <li>Create superuser: <code>python manage.py createsuperuser</code></li>
      </ol>

      <h2>Basics</h2>
      <ol start="7">
        <li>MTV Architecture (Model, Template, View)</li>
        <li>
          Models
          <ul>
            <li>Model class, fields, Meta class</li>
            <li>Model methods</li>
          </ul>
        </li>
        <li>
          Views
          <ul>
            <li>Function-based views</li>
            <li>Class-based views</li>
          </ul>
        </li>
        <li>Templates</li>
        <li>URL dispatcher (urls.py)</li>
        <li>Admin interface</li>
      </ol>

      <h2>ORM</h2>
      <ol start="13">
        <li>QuerySet, Managers</li>
        <li>CRUD operations</li>
        <li>Filtering, excluding, ordering</li>
        <li>Relationships: OneToOne, ForeignKey, ManyToMany</li>
        <li>Migrations: <code>makemigrations</code>, <code>migrate</code></li>
      </ol>

      <h2>Advanced Topics</h2>
      <ol start="18">
        <li>Middleware</li>
        <li>Signals</li>
        <li>Context Processors</li>
        <li>Forms and ModelForms</li>
        <li>Form validation</li>
        <li>Generic Views</li>
        <li>Mixins</li>
        <li>Pagination</li>
        <li>Sessions and Cookies</li>
        <li>File Uploads</li>
        <li>Email sending</li>
        <li>Static & Media files</li>
        <li>Deployment (Gunicorn + Nginx + PostgreSQL)</li>
      </ol>

      <h2>Authentication & Authorization</h2>
      <ol start="31">
        <li>Login, Logout, Password reset</li>
        <li>User model & Custom user model</li>
        <li>Permissions and Groups</li>
        <li>Decorators: <code>@login_required</code>, <code>@permission_required</code></li>
      </ol>

      <h2>Rest API with Django Rest Framework (DRF)</h2>
      <ol start="35">
        <li><code>pip install djangorestframework</code></li>
        <li>Serializers</li>
        <li>APIView vs ViewSet</li>
        <li>Routers</li>
        <li>Authentication (Token, JWT)</li>
        <li>Permissions and throttling</li>
        <li>Filtering, Searching, Pagination</li>
        <li>Nested serializers</li>
      </ol>

      <h2>Good to Know</h2>
      <ol start="43">
        <li>Virtual Environments (venv, pipenv)</li>
        <li>Environment variables with <code>python-decouple</code></li>
        <li>Celery for background tasks</li>
        <li>Redis for caching and queues</li>
        <li>Testing with <code>unittest</code> and <code>pytest-django</code></li>
      </ol>

      <h2>Interview Style Questions</h2>
      <ol start="48">
        <li>Difference between Django and Flask?</li>
        <li>What is MTV architecture?</li>
        <li>What are signals in Django?</li>
        <li>What is the use of middleware?</li>
        <li>How do you create a custom user model?</li>
        <li>How does Django handle static files?</li>
        <li>What is lazy loading in Django ORM?</li>
        <li>Explain Django's request/response cycle.</li>
        <li>How is REST API handled in Django?</li>
        <li>Difference between AbstractUser and AbstractBaseUser?</li>
      </ol>
    </div>
  );
}

export default Django;
