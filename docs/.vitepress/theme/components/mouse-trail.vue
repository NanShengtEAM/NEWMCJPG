/*<script setup>

 function initMouseTrail() {
    // 配置参数
    const config = {
        maxTrailLength: 5,  // 轨迹的最大长度
        lineWidth: 3,        // 线条的宽度
        startColor: [255, 0, 0], // 起始颜色（红色）
        endColor: [148,0,211],   // 结束颜色（紫色）
        fadeOutSpeed: 1      // 控制轨迹淡出的速度
    };
    
    // 创建 canvas 元素并设置基本样式
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';  // 确保 canvas 不会阻止鼠标事件
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const ctx = canvas.getContext('2d');
    let trail = [];
    let lastMousePosition = { x: 0, y: 0 };

    function lerpColor(a, b, amount) {
        const [ar, ag, ab] = a;
        const [br, bg, bb] = b;
        return [
            ar + amount * (br - ar),
            ag + amount * (bg - ag),
            ab + amount * (bb - ab)
        ].map(Math.round);
    }


    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 1; i < trail.length; i++) {
            const gradientRatio = i / trail.length;
            const color = lerpColor(config.startColor, config.endColor, gradientRatio);

            ctx.beginPath();
            ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
            ctx.lineTo(trail[i].x, trail[i].y);
            ctx.strokeStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
        }
    }


    function updateTrail() {
        if (lastMousePosition.x !== 0 && lastMousePosition.y !== 0) {
            trail.push({ ...lastMousePosition });
        }


        if (trail.length > config.maxTrailLength) {
            trail = trail.slice(config.fadeOutSpeed);
        }
    }

    window.addEventListener('mousemove', (event) => {
        lastMousePosition.x = event.pageX;

        lastMousePosition.y =  event.pageY - window.scrollY;
    });


    function animate() {
        updateTrail();
        draw();
        requestAnimationFrame(animate);
    }
    animate();


    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMouseTrail);
} else {
    initMouseTrail();
}
</script>
*/
