<?php

namespace App\Http\Resources\Shop;

use Illuminate\Http\Resources\Json\Resource;

class ShopResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        /*p($this->total());
        dd($this->items());
        dd($this);*/

        /*return [
            'id' => $this->id,
            'name' => $this->name,
            'month_nums' => $this->month_nums,
            'package_price' => $this->package_price,
            'remark' => $this->remark,       
            'created_at' => $this->created_at,       
        ];*/

        return parent::toArray($request);
    }

    /*public function with($request)
    {
        return [
            'info' => 'sihuiyaoqiu',
        ];
    }*/
}
