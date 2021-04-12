<?php

namespace App\Events;

use App\Sale;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class OrderStatusChangedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $cuenta;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Sale $cuenta)
    {
        $this->cuenta = $cuenta;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('status-track.'.$this->cuenta->id);
    }
    public function broadcastWith()
    {
        $extra=[
            'numero_mesa'=>$this->cuenta->table->numero,
        ];
        return array_merge($this->cuenta->toArray(), $extra);
    }
}
