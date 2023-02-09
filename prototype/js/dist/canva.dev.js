"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('load', function () {
  var canvas = document.getElementById('canvas1');
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var Particle =
  /*#__PURE__*/
  function () {
    function Particle(effect, x, y, color) {
      _classCallCheck(this, Particle);

      this.effect = effect;
      this.x = this.originX = x;
      this.y = this.originY = y;
      this.size = 2;
      this.color = color;
      this.dx = 2;
      this.dy = 2;
      this.vx = 0;
      this.vy = 0;
      this.force = 0.5;
      this.angle = 0;
      this.distance = 0;
      this.friction = 0.98;
      this.ease = 0.2;
    }

    _createClass(Particle, [{
      key: "update",
      value: function update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      }
    }]);

    return Particle;
  }();

  var Effect =
  /*#__PURE__*/
  function () {
    function Effect(width, height) {
      var _this = this;

      _classCallCheck(this, Effect);

      this.width = width;
      this.height = height;
      this.image = document.getElementById('image');
      this.centerX = this.width / 2;
      this.centerY = this.height / 2;
      this.x = this.centerX - this.image.width / 2;
      this.y = this.centerY - this.image.height / 2;
      this.particles = [];
      this.gap = 2;
      this.mouse = {
        radius: 5000,
        x: this.centerX,
        y: this.centerY
      };
      window.addEventListener("mousemove", function (event) {
        _this.mouse.x = event.x;
        _this.mouse.y = event.y;
      });
      window.addEventListener("touchstart", function (event) {
        _this.mouse.x = event.changedTouches[0].clientX;
        _this.mouse.y = event.changedTouches[0].clientY;
      }, false);
      window.addEventListener("touchmove", function (event) {
        event.preventDefault();
        _this.mouse.x = event.targetTouches[0].clientX;
        _this.mouse.y = event.targetTouches[0].clientY;
      }, false);
      window.addEventListener("touchend", function (event) {
        event.preventDefault();
        _this.mouse.x = 0;
        _this.mouse.y = 0;
      }, false);
    }

    _createClass(Effect, [{
      key: "init",
      value: function init(context) {
        context.drawImage(this.image, this.x, this.y);
        var pixels = context.getImageData(0, 0, this.width, this.height).data;
        var index;

        for (var y = 0; y < this.height; y += this.gap) {
          for (var x = 0; x < this.width; x += this.gap) {
            index = (y * this.width + x) * 4;
            var red = pixels[index];
            var green = pixels[index + 1];
            var blue = pixels[index + 2];
            var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
            var alpha = pixels[index + 3];

            if (alpha > 0) {
              this.particles.push(new Particle(this, x, y, color));
            }
          }
        }

        context.clearRect(0, 0, this.width, this.height);
      }
    }, {
      key: "update",
      value: function update() {
        for (var i = 0; i < this.particles.length; i++) {
          this.particles[i].update();
        }
      }
    }, {
      key: "render",
      value: function render(context) {
        context.clearRect(0, 0, this.width, this.height);

        for (var i = 0; i < this.particles.length; i++) {
          var p = this.particles[i];
          context.fillStyle = p.color;
          context.fillRect(p.x, p.y, p.size, p.size);
        }
      }
    }]);

    return Effect;
  }();

  var effect = new Effect(canvas.width, canvas.height);
  effect.init(ctx);

  function animate() {
    effect.update();
    effect.render(ctx);
    requestAnimationFrame(animate);
  }

  animate();
});